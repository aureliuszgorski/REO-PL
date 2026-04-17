import json
import urllib.request
import re

cats = [
  { "title": "Case Studies", "slug": "case-studies" },
  { "title": "Zielona encyklopedia", "slug": "zielona-encyklopedia" },
  { "title": "Green news", "slug": "green-news" },
  { "title": "Biznes i prawo", "slug": "biznes-i-prawo" },
  { "title": "Ekoporady", "slug": "ekoporady" }
]

def fetch_html(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

all_articles = []
seen = set()

for cat in cats:
    print("Fetching " + cat["slug"])
    html = fetch_html("https://reo.pl/pl/informacje/" + cat["slug"])
    blocks = html.split('<a href="')[1:]
    
    count = 0
    for block in blocks:
        if count >= 6: break
        if '<img ' in block and ('</h3>' in block or '</h2>' in block):
            try:
                url = block.split('"')[0]
                if '/informacje/' in url and url not in seen:
                    seen.add(url)
                    if url.startswith('/'):
                        url = "https://reo.pl" + url
                    
                    print("  -> " + url)
                    article_html = fetch_html(url)
                    
                    title_match = re.search(r'<h1[^>]*>([\s\S]*?)</h1>', article_html)
                    title = title_match.group(1).replace('&nbsp;', ' ') if title_match else ""
                    title = re.sub(r'<[^>]+>', '', title).strip().replace('| Reo.pl', '').strip()
                    
                    img_match = re.search(r'<meta property="og:image" content="(.*?)"', article_html)
                    img = img_match.group(1) if img_match else "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
                    if img.startswith('/'): img = "https://reo.pl" + img
                    
                    exc_match = re.search(r'<meta property="og:description" content="(.*?)"', article_html)
                    excerpt = exc_match.group(1).replace('&quot;', '"') if exc_match else title
                    
                    date_match = re.search(r'\d{2}\.\d{2}\.\d{4}', block)
                    date = date_match.group(0) if date_match else "17.04.2026"
                    
                    p_matches = re.findall(r'<p[^>]*>([\s\S]*?)</p>', article_html)
                    paragraphs = []
                    for match in p_matches:
                        inner = re.sub(r'<[^>]*>', '', match).strip()
                        if len(inner) > 30 and 'Copyright' not in inner and 'Dla medi' not in inner:
                            paragraphs.append(f"<p>{inner}</p>")
                    
                    content = "".join(paragraphs).replace('&nbsp;', ' ')
                    read_time = f"{max(2, len(content) // 800)} min"
                    
                    cid = re.sub(r'[^a-zA-Z0-9]', '', title)[:10]
                    slug = url.split('/')[-1].split('?')[0]
                    
                    if title and slug:
                        all_articles.append({
                            "id": cid,
                            "title": title,
                            "excerpt": excerpt,
                            "category": cat["title"],
                            "slug": slug,
                            "readTime": read_time,
                            "date": date,
                            "image": img,
                            "content": content
                        })
                        count += 1
            except Exception as e:
                print("Error parsing block:", e)

categories = [
  {"id": "wszystkie", "label": "Wszystkie"},
  {"id": "case-studies", "label": "Case Studies"},
  {"id": "zielona-encyklopedia", "label": "Zielona encyklopedia"},
  {"id": "green-news", "label": "Green news"},
  {"id": "biznes-i-prawo", "label": "Biznes i prawo"},
  {"id": "ekoporady", "label": "Ekoporady"},
  {"id": "media-o-nas", "label": "Media o nas"},
  {"id": "podcasty", "label": "Podcasty"}
]

out = "export const categories = " + json.dumps(categories, indent=2) + ";\\n\\n"
out += "export const articles = " + json.dumps(all_articles, indent=2) + ";\\n"

with open('src/data/articles.ts', 'w') as f:
    f.write(out)

print(f"Saved {len(all_articles)} articles.")
