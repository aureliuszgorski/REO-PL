export interface Article {
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

export const articles: Article[] = [
  {
    "id": "wifama-case",
    "title": "Zielona energia dla kompleksu przemysłowego WIFAMA Sp. z o.o.",
    "excerpt": "WIFAMA Sp. z o.o. zarządza rozległym kompleksem przemysłowym w Łodzi, realizując szeroki zakres zaawansowanych usług produkcyjnych dla wymagających sektorów rynku.",
    "category": "Case Studies",
    "slug": "zielona-energia-dla-kompleksu-przemyslowego-wifama",
    "readTime": "4 min",
    "date": "15 Maj 2024",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    "content": "<h2>Zaawansowany przemysł a zielona energia</h2><p>WIFAMA Sp. z o.o. zarządza rozległym kompleksem przemysłowym w Łodzi, realizując szeroki zakres zaawansowanych usług produkcyjnych dla wymagających sektorów rynku (m.in. odlewy ciśnieniowe aluminium, projektowanie i konstrukcję, odlewanie piaskowe, obróbkę CNC), w tym sektora obronnego.</p><p>Przejście na w 100% odnawialne źródła energii (OZE) dzięki platformie Reo.pl pozwoliło zakładowi znacząco zredukować ślad węglowy, jednocześnie gwarantując długoterminowe zabezpieczenie cen, co ma kluczowe znaczenie przy tak energochłonnych procesach.</p>"
  },
  {
    "id": "kaefer-case",
    "title": "KAEFER S.A. to kolejny świadomy odbiorca energii elektrycznej od Reo.pl",
    "excerpt": "Firma realizuje swą wizję eliminacji strat energii, wykonując izolacje zimno- i ciepłochronne, zabezpieczenia powierzchni oraz ochronę przeciwpożarową.",
    "category": "Case Studies",
    "slug": "kaefer-swiadomy-odbiorca-energii-reo",
    "readTime": "5 min",
    "date": "02 Kwi 2024",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    "content": "<h2>Wizja eliminacji strat energii w praktyce</h2><p>KAEFER S.A., to kolejny świadomy odbiorca energii elektrycznej od Reo.pl. Firma realizuje swą wizję eliminacji strat energii, wykonując izolacje zimno- i ciepłochronne, zabezpieczenia powierzchni, izolacje akustyczne, pasywną ochronę przeciwpożarową, roboty fasadowe, rusztowania, demontaż i utylizację azbestu.</p><p>Dzięki współpracy z naszą platformą transakcyjną, firma jest w stanie nie tylko eliminować straty po stronie infrastruktury fizycznej swoich klientów, ale również wewnątrz własnych obiektów – zasilając się czystym prądem.</p>"
  },
  {
    "id": "robyg-case",
    "title": "Robyg S.A. zasilany 100% czystą energią od Reo.pl!",
    "excerpt": "We wszystkich inwestycjach spółki znajdziemy rozwiązania niskoemisyjne i specjalny, zielony standard budownictwa. Energia jest tu kluczem.",
    "category": "Case Studies",
    "slug": "robyg-zasilany-100-czysta-energia",
    "readTime": "6 min",
    "date": "10 Mar 2024",
    "image": "https://images.unsplash.com/photo-1481253127861-534498168948?w=800&q=80",
    "content": "<h2>Standardy nowoczesnego dewelopera</h2><p>We wszystkich inwestycjach spółki znajdziemy rozwiązania niskoemisyjne i specjalny, zielony standard budownictwa. Jeśli dołożymy do tego energię, która w 100% pochodzi ze źródeł OZE oraz szereg działań i inicjatyw na rzecz środowiska, to zyskujemy obraz wiodącego dewelopera, prowadzącego swoje inwestycje w sposób świadomy i odpowiedzialny.</p><p>Zasilanie biur oraz osiedli prosto od polskich certyfikowanych wytwórców jest filarem, dzięki któremu Robyg tak śmiało realizuje swoją politykę ESG.</p>"
  },
  {
    "id": "drzewa-tlen",
    "title": "Czym są drzewa tlenowe i dlaczego warto je sadzić?",
    "excerpt": "Walka z zanieczyszczeniami powietrza może przebiegać na wiele sposobów, w tym poprzez sadzenie tzw. OxyTrees.",
    "category": "Zielona encyklopedia",
    "slug": "czym-sa-drzewa-tlenowe",
    "readTime": "3 min",
    "date": "20 Cze 2024",
    "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    "content": "<h2>Jak działają OxyTrees?</h2><p>Walka z zanieczyszczeniami powietrza może przebiegać na wiele sposobów, w tym poprzez przygotowywanie nasadzeń z roślin, które pochłaniają dwutlenek węgla i w zamian produkują tlen w procesie fotosyntezy. Na przestrzeni ostatnich kilku lat rosnącą popularnością cieszą się tzw. OxyTrees, czy drzewa tlenowe. Co to takiego i w jaki sposób drzewa tlenowe można wykorzystać w środowisku miejskim, a także w dużych firmach?</p><p>Drzewa tlenowe wyróżniają się niesamowitym tempem wzrostu i wyjątkowo dużymi liśćmi, które pracują niczym płuca w zanieczyszczonych betonowych dżunglach.</p>"
  },
  {
    "id": "klasa-energ",
    "title": "Klasa energetyczna – czym jest i co oznacza?",
    "excerpt": "Oznaczenie klasy energetycznej w obrazowy sposób odzwierciedla, jak dużo prądu zużywa urządzenie i czy jest ekologiczne.",
    "category": "Zielona encyklopedia",
    "slug": "klasa-energetyczna-czym-jest",
    "readTime": "3 min",
    "date": "05 Kwi 2024",
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    "content": "<h2>Świadomy wybór do biura i domu</h2><p>Wybierając do domu lub firmy sprzęt AGD/RTV spotkasz się z oznaczeniem klasy energetycznej. W obrazowy sposób odzwierciedla ona, jak dużo prądu zużywa dane urządzenie i czy jest ono tanie dla portfela i ekologiczne. Sprawdź, czym są klasy energetyczne i jak je czytać. Kiedyś powszechnie stosowano skalę od A+++ do D, dzisiaj powróciliśmy do zrewidowanej, znacznie surowszej skali od A do G.</p>"
  },
  {
    "id": "envirly-news",
    "title": "Partnerstwo Reo.pl z Envirly: energia z OZE i raportowanie śladu węglowego",
    "excerpt": "Reo.pl nawiązuje strategiczne partnerstwo z Envirly, dostawcą zaawansowanego narzędzia do mierzenia i raportowania śladu węglowego.",
    "category": "Green news",
    "slug": "partnerstwo-reopl-z-envirly",
    "readTime": "2 min",
    "date": "10 Wrz 2024",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "content": "<h2>Automatyzacja procesów ESG</h2><p>Reo.pl, platforma handlu wyłącznie zieloną energią nawiązuje strategiczne partnerstwo z Envirly, dostawcą zaawansowanego narzędzia do mierzenia i raportowania śladu węglowego. Wspólna inicjatywa firm ma na celu kompleksowe wsparcie klientów w transformacji energetycznej, wdrażaniu polityk zrównoważonego rozwoju oraz spełnianiu wymogów raportowania, określonych unijnymi przepisami (CSRD).</p>"
  },
  {
    "id": "system-kaucja",
    "title": "Czym jest system kaucyjny i od kiedy będzie obowiązywać?",
    "excerpt": "Polska wprowadza system kaucyjny będący odpowiedzią na tzw. dyrektywę plastikową. Od października 2025 roku.",
    "category": "Green news",
    "slug": "czym-jest-system-kaucyjny",
    "readTime": "4 min",
    "date": "15 Lip 2024",
    "image": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    "content": "<h2>Single-Use Plastic w Polsce</h2><p>System kaucyjny to rozwiązanie, które jest odpowiedzią na zapisy dyrektywy Single-Use Plastic, czyli tak zwanej dyrektywy plastikowej. Ma na celu zwiększenie poziomu recyklingu, a także ograniczenie ilości odpadów, trafiających do środowiska. W Polsce będzie obowiązywał od października 2025 roku, choć pierwotnie planowano, że zostanie uruchomiony znacznie wcześniej. Obejmie on butelki z plastiku, szkła wielorazowego i aluminium.</p>"
  },
  {
    "id": "fit-for-55",
    "title": "Pakiet Fit for 55 – na czym polega ten pakiet klimatyczny?",
    "excerpt": "Fit for 55 to ambitna inicjatywa UE mająca na celu osiągnięcie neutralności węglowej do 2050 roku i redukcję o 55% do 2030.",
    "category": "Biznes i prawo",
    "slug": "pakiet-fit-for-55-na-czym-polega",
    "readTime": "6 min",
    "date": "12 Cze 2024",
    "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    "content": "<h2>Rewolucja Prawna</h2><p>Pakiet Fit for 55 to ambitna inicjatywa Unii Europejskiej mająca na celu walkę ze zmianami klimatycznymi i osiągnięcie neutralności węglowej do 2050 roku. Obejmuje on szereg przepisów i działań, które mają na celu redukcję emisji gazów cieplarnianych o co najmniej 55% do 2030 roku w porównaniu z poziomami z 1990 roku.</p><p>Nowe regulacje dotkną wielu sektorów gospodarki, w tym energetyki, transportu oraz budownictwa, zmuszając państwa członkowskie do wdrożenia bardziej zrównoważonych i ekologicznych rozwiązań.</p>"
  },
  {
    "id": "ewidencja",
    "title": "Jak prowadzić ewidencję odpadów w BDO?",
    "excerpt": "Od 2018 r. działa elektroniczny rejestr BDO. Co warto o nim wiedzieć i kto musi się w nim zarejestrować?",
    "category": "Biznes i prawo",
    "slug": "jak-prowadzic-ewidencje-odpadow-bdo",
    "readTime": "5 min",
    "date": "22 Sie 2024",
    "image": "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80",
    "content": "<h2>Zrozumieć BDO</h2><p>Od 2018 roku Ministerstwo Klimatu – wtedy jeszcze Ministerstwo Środowiska – prowadzi elektroniczny rejestr BDO, czyli bazę danych o produktach i opakowaniach oraz o gospodarce odpadami. Jeżeli Twoja firma w jakikolwiek sposób bierze udział w produkcji, wykorzystaniu lub utylizacji odpadów, najprawdopodobniej powinieneś zarejestrować się w BDO.</p>"
  },
  {
    "id": "prosument",
    "title": "Kim jest prosument wirtualny? Zasady w 2025",
    "excerpt": "Korzystanie z instalacji PV wiąże się ze statuseem prosumenta. Od 2 lipca 2025 r. funkcjonuje też prosument wirtualny.",
    "category": "Biznes i prawo",
    "slug": "kim-jest-prosument-wirtualny-zasady-w-2025",
    "readTime": "4 min",
    "date": "01 Wrz 2024",
    "image": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    "content": "<h2>Wirtualny Prosument – Co to znaczy?</h2><p>Korzystanie z instalacji fotowoltaicznej wiąże się z przyznaniem użytkownikowi statusu prosumenta. Obowiązujące przepisy ustawy o odnawialnych źródłach energii rozróżniają jednak różne typy prosumenta energii odnawialnej. Od dnia 2 lipca 2025 r. obok indywidualnego, lokatorskiego i zbiorowego funkcjonuje prosument wirtualny.</p><p>Oznacza to, że zyskujesz uprawnienia do odbioru wytworzonej energii z farmy PV zlokalizowanej z dala od twojego miejsca zamieszkania, bez fizycznego połączenia kablem - po prostu poprzez inteligentny grid (smart systemy P2P).</p>"
  },
  {
    "id": "wodor",
    "title": "Jak powstaje wodór? Elektroliza – co to i jak działa?",
    "excerpt": "Ekologiczny wodór jako źródło energii to przyszłość OZE. Jak z produkcji poprzez elektrolizę można stworzyć zeroemisyjne rozwiązania?",
    "category": "Ekoporady",
    "slug": "jak-powstaje-wodor-elektroliza",
    "readTime": "4 min",
    "date": "12 Kwi 2024",
    "image": "https://images.unsplash.com/photo-1506509971932-5bf58bcbcfa8?w=800&q=80",
    "content": "<h2>Zielony Wodór z odnawialnej energii</h2><p>Ekologiczny wodór jako źródło energii to jeden z kierunków rozwoju OZE. Aby było możliwe wykorzystanie go na szeroką skalę, należy jednak zastosować łatwą, wydajną i tanią metodę jego produkcji. Obecnie zielony wodór można pozyskać na jeden z kilku sposobów – jako reforming parowy gazu ziemnego, fotosyntezę, fermentację oraz metodę elektrochemiczną, czyli elektrolizę.</p><p>Najbezpieczniejsze dla planety jest zasilanie elektrolizerów nadwyżkami prądu wyprodukowanymi dzięki turbinom wiatrowym pracującym w nocy.</p>"
  },
  {
    "id": "licznik",
    "title": "Jak działa inteligentny licznik prądu?",
    "excerpt": "Opomiarowanie smart to podstawa bilansowania. Czy w Twojej firmie zamontowano już LZO?",
    "category": "Ekoporady",
    "slug": "jak-dziala-inteligentny-licznik-pradu",
    "readTime": "3 min",
    "date": "20 Sie 2024",
    "image": "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
    "content": "<h2>Koniec z inkasentami!</h2><p>Klasyczny odczyt prądu wymaga wizyty inkasenta w domu lub w firmie. Taka osoba sprawdza wskazania licznika energii i na tej podstawie wyliczane są prognozy i wysokość rachunków dla odbiorcy prądu. W Punktach Poboru Energii coraz częściej można spotkać inteligentne liczniki prądu, które ułatwiają cały proces odczytu i sprawiają, że jest on bardziej precyzyjny.</p>"
  }
];