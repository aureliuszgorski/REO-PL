import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function GenericSubpage({ params }: { params: { slug: string[] } }) {
  const rawTitle = params.slug[params.slug.length - 1];
  
  const formattedTitle = rawTitle
    .split("-")
    .map(word => {
      // Small words shouldn't always be capitalized, but for simplicity:
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  const breadcrumbs = params.slug.map((segment, index) => {
    const href = "/pl/" + params.slug.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { href, label };
  });

  return (
    <div className="min-h-screen bg-white flex flex-col pt-[80px]">
      
      {/* Subpage Banner (Reo.pl style has simple wide banners for subpages) */}
      <section className="bg-brand-dark relative w-full h-[250px] md:h-[350px] flex flex-col justify-end">
        {/* Placeholder for standard Reo banner image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/storage/2_grupy-biznesowe-reo_836c2a7a.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent"></div>
        
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 shadow-sm relative pl-4 border-l-4 border-brand-green">
            {formattedTitle}
          </h1>
        </div>
      </section>

      {/* Main Content Area (Classic structural column) */}
      <section className="flex-1 w-full relative">
        {/* Breadcrumb row usually lives between banner and content or right above */}
        <div className="border-b border-gray-100 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium">
              <Link href="/" className="hover:text-brand-green transition-colors">Start</Link>
              {breadcrumbs.map((crumb, idx) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <Link 
                    href={crumb.href} 
                    className={`${idx === breadcrumbs.length - 1 ? "text-brand-green" : "hover:text-brand-green transition-colors"}`}
                  >
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="w-full lg:w-8/12">
            
            <article className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-brand-dark mb-8">
                {formattedTitle}
              </h2>
              
              <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-gray-200 pl-6">
                Witamy w sekcji <strong>{breadcrumbs[breadcrumbs.length - 1]?.label}</strong>. Ten widok jest autentycznym odwzorowaniem klasycznej struktury dokumentacyjnej platformy węzła Reo.pl.
              </p>

              <p className="mb-6 text-gray-700 leading-relaxed font-sans">
                Zoptymalizowaliśmy układ podstron na podstawie architektury oryginalnego silnika. Górna belka nawigacyjna posiada teraz właściwy, kwadratowy i prosty układ zakładek używany przez Reo (np. tła `bg-white`, szerokość kontenerów, układ `border-t-3px border-brand-green` przywieszany przy opuszczeniu zakładki), likwidując sztuczny "okrągły" design.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mt-12 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green"></div>
                <h3 className="font-bold text-brand-dark mb-3 text-2xl mt-0">Dalsze Kroki Rozwojowe</h3>
                <p className="text-gray-600 !mb-0 font-sans">
                  Ta podstrona (oraz setki innych z Menu) jest renderowana na żywo jako czysta, tradycyjnie ułożona sekcja informacyjna, dzięki układowi Catch-All. Znika nadmierna stylizacja (brak obłych wielkich ekranów, wejście w klasyczny układ korporacyjny Reo).
                </p>
              </div>

            </article>

          </div>
        </div>
      </section>

    </div>
  );
}
