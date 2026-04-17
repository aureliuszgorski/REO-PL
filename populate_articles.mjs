import fs from 'fs';

async function fetchHtml(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err.message);
    return "";
  }
}

function extractFirstMatch(regex, html) {
  const match = regex.exec(html);
  return match ? match[1].trim() : '';
}

async function scrape() {
  const cats = [
    { title: "Case Studies", slug: "case-studies" },
    { title: "Zielona encyklopedia", slug: "zielona-encyklopedia" },
    { title: "Green news", slug: "green-news" },
    { title: "Biznes i prawo", slug: "biznes-i-prawo" },
    { title: "Ekoporady", slug: "ekoporady" }
  ];
  
  let allArticles = [];
  
  for(let cat of cats) {
    console.log("Fetching index for " + cat.slug);
    const indexHtml = await fetchHtml(`https://reo.pl/pl/informacje/${cat.slug}`);
    
    // Prosty regex do znalezienia kart artykułów w Reo.pl.
    const blocks = indexHtml.split('<a href=\"').slice(1);
    
    let crawledThisCat = 0;
    
    for (const block of blocks) {
      if (crawledThisCat > 3) break; // Maximum 4 per category to keep it fast
      
      if (block.includes('<img ') && (block.includes('</h3>') || block.includes('</h2>'))) {
        const urlMatch = block.match(/^([^"]+)"/);
        let url = urlMatch ? urlMatch[1] : "";
        
        if (url && url.includes('/informacje/') && !allArticles.find(a => a.url === url)) {
           url = url.startsWith('/') ? `https://reo.pl${url}` : url;
           
           console.log(`Fetching article: ${url}`);
           const articleHtml = await fetchHtml(url);
           
           let title = extractFirstMatch(/<h1[^>]*>([\s\S]*?)<\/h1>/, articleHtml) || extractFirstMatch(/<title>(.*?)<\/title>/, articleHtml);
           title = title.replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, '').trim().replace(/\| Reo\.pl/, '').trim();
           
           let image = extractFirstMatch(/<meta property="og:image" content="(.*?)"/, articleHtml) || 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80';
           if (image.startsWith('/')) image = `https://reo.pl${image}`;
           
           let excerpt = extractFirstMatch(/<meta property="og:description" content="(.*?)"/, articleHtml);
           excerpt = excerpt ? excerpt.replace(/&quot;/g, '"') : "";
           
           let dateMatch = block.match(/\d{2}\.\d{2}\.\d{4}/);
           let date = dateMatch ? dateMatch[0] : "17.04.2026";
           
           const paragraphRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
           let pMatch;
           const paragraphs = [];
           while ((pMatch = paragraphRegex.exec(articleHtml)) !== null) {
             const pText = pMatch[0];
             const inner = pMatch[1].replace(/<[^>]*>/g, '').trim();
             if (inner.length > 25 && !inner.includes('Dla medi') && !inner.includes('Copyright')) {
               paragraphs.push(pText);
             }
           }
           
           const content = paragraphs.join("\\n\\n").replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"');
           const slug = url.split('/').pop().split('?')[0];
           const readTime = Math.max(2, Math.floor(content.length / 800)) + " min";
           
           if (title && slug) {
             allArticles.push({
               id: slug,
               title,
               excerpt: excerpt || title,
               slug,
               category: cat.title,
               date,
               readTime,
               image,
               content,
               url
             });
             crawledThisCat++;
           }
        }
      }
    }
  }
  
  const outputFile = './src/data/articles.ts';
  const tsContent = \`export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: "Case Studies" | "Zielona encyklopedia" | "Green news" | "Biznes i prawo" | "Ekoporady" | "Media o nas" | "Podcasty" | string;
  slug: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

export const categories = [
  { id: "wszystkie", label: "Wszystkie" },
  { id: "case-studies", label: "Case Studies" },
  { id: "zielona-encyklopedia", label: "Zielona encyklopedia" },
  { id: "green-news", label: "Green news" },
  { id: "biznes-i-prawo", label: "Biznes i prawo" },
  { id: "ekoporady", label: "Ekoporady" },
  { id: "media-o-nas", label: "Media o nas" },
  { id: "podcasty", label: "Podcasty" }
];

export const articles: Article[] = " + JSON.stringify(allArticles, null, 2).replace(/\\u00A0/g, " ") + ";";
  
  fs.writeFileSync(outputFile, tsContent);
  console.log("Saved " + allArticles.length + " final articles to " + outputFile);
}

scrape().catch(console.error);
