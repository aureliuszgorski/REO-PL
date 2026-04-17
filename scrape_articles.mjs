import fs from 'fs';

async function fetchHtml(url) {
  try {
    const res = await fetch(url);
    return await res.text();
  } catch(e) {
    console.error(e);
    return "";
  }
}

async function run() {
  const categories = [
    { title: "Case Studies", slug: "case-studies" },
    { title: "Zielona encyklopedia", slug: "zielona-encyklopedia" },
    { title: "Green news", slug: "green-news" },
    { title: "Biznes i prawo", slug: "biznes-i-prawo" },
    { title: "Ekoporady", slug: "ekoporady" },
    { title: "Media o nas", slug: "media-o-nas" },
    { title: "Podcasty", slug: "podcasty" }
  ];
  
  let allArticles = [];

  for(let cat of categories) {
    console.log("Scraping " + cat.slug);
    const html = await fetchHtml(`https://reo.pl/pl/informacje/${cat.slug}`);
    
    // Prosty regex do znalezienia kart artykułów w Reo.pl.
    // Zazwyczaj to linki, zawierające img, h3/h2 oraz p.
    // Ograniczmy się do szukania bloków ahref, które mają img z klasą lub coś podobnego.
    
    // Split by <a href="... żeby znaleźć kafelki artykułów.
    // Bardzo uogólnione, bo nie znamy dokładnej struktury, ale spróbujmy.
    const blocks = html.split('<a href=\"').slice(1);
    
    for (const block of blocks) {
      if (block.includes('<img ') && block.includes('</h3>')) {
        const urlMatch = block.match(/^([^"]+)"/);
        const imgMatch = block.match(/<img[^>]+src="([^"]+)"/);
        const titleMatch = block.match(/<h3[^>]*>(.*?)<\/h3>/);
        let excerptMatch = block.match(/<p[^>]*>(.*?)<\/p>/);
        
        // Remove tags from excerpt
        let excerpt = excerptMatch ? excerptMatch[1].replace(/<[^>]+>/g, '').trim() : "";
        let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : "";
        
        let url = urlMatch ? urlMatch[1] : "";
        let img = imgMatch ? imgMatch[1] : "";

        // Jeśli to poprawny artykuł informacyjny
        if (title && url.includes('/informacje/')) {
           // Wytnij datę (często jest w divie lub spanie wewnątrz linku), np. "17.04.2024"
           let dateMatch = block.match(/\d{2}\.\d{2}\.\d{4}/);
           let date = dateMatch ? dateMatch[0] : "10.04.2026";
           
           if (!img.startsWith('http')) {
             img = img.startsWith('/') ? `https://reo.pl${img}` : `https://reo.pl/${img}`;
           }

           if (!allArticles.find(a => a.title === title)) {
             try {
                // Fetch the inner page to get content
                const innerHtml = await fetchHtml(url.startsWith('/') ? 'https://reo.pl'+url : url);
                const paragraphRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
                let pMatch;
                const paragraphs = [];
                while ((pMatch = paragraphRegex.exec(innerHtml)) !== null) {
                  const pText = pMatch[0];
                  const inner = pMatch[1].replace(/<[^>]*>/g, '').trim();
                  if (inner.length > 25 && !inner.includes('Dla medi') && !inner.includes('Copyright')) {
                     paragraphs.push(pText);
                  }
                }
                const content = paragraphs.join("\n\n").replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"');
                const readTime = Math.max(2, Math.floor(content.length / 800)) + " min";
                
                allArticles.push({
                  id: title.replace(/[^a-zA-Z0-9]/g, '').slice(0,10),
                  category: cat.title,
                  slug: url.split('/').pop().split('?')[0],
                  title,
                  excerpt: excerpt || title,
                  image: img,
                  readTime,
                  date,
                  content
                });
             } catch(e) {}
           }
        }
      }
    }
  }

  // Zapisz do TS
  const tsContent = "export const categories = " + JSON.stringify(categories, null, 2) + ";\n\n" +
                    "export const articles = " + JSON.stringify(allArticles, null, 2) + ";\n";
  fs.writeFileSync('src/data/articles.ts', tsContent);
  console.log("Saved " + allArticles.length + " articles!");
}

run();
