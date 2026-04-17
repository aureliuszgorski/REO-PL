"use client";

import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <section className="bg-slate-900 relative w-full h-[250px] md:h-[350px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900"></div>
        
        <div className="max-w-[1000px] w-full mx-auto px-6 md:px-12 relative z-10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-slate-300 mb-6 uppercase tracking-wider backdrop-blur-sm">
            DOKUMENTY
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Polityka <span className="text-brand-green">prywatności</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium">
            Zasady przetwarzania i ochrony danych osobowych
          </p>
        </div>
      </section>

      <main className="flex-1 w-full relative">
        <div className="border-b border-black/5 bg-white shadow-sm sticky top-[80px] z-40">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-slate-900 transition-colors">Strona główna</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/dokumenty/dokumenty-do-pobrania" className="hover:text-slate-900 transition-colors">Dokumenty</Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-brand-green font-bold">Polityka prywatności</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-[#1e1a3b] prose-a:text-brand-green hover:prose-a:text-brand-dark">
            <p className="lead text-lg text-slate-600 mb-8">
              Zgodnie z wymaganiami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) zwanego dalej „Rozporządzeniem” lub „RODO” informujemy, że:
            </p>
            
            <p>
              Administratorem danych osobowych zwanym dalej „Administratorem” jest Reo Sp. z o.o. z siedzibą w Warszawie przy ul. Gotarda 9, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego, prowadzonego przez Sąd Rejonowy w Warszawie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS: 0000953880, NIP: 5213956475, REGON: 521277758. Administrator danych osobowych odpowiada za wykorzystanie danych osobowych w sposób bezpieczny, zgodny z celami w jakich zostały zebrane oraz zgodny z obowiązującymi przepisami prawa. Kontakt z Administratorem danych osobowych: email: <a href="mailto:rodo@reo.pl">rodo@reo.pl</a> lub na adres ul. Gotarda 9, 02-683 Warszawa.
            </p>
            <p>
              Administrator wyznaczył Inspektora Ochrony Danych, z którym można skontaktować się na następujące dane: Inspektor Ochrony Danych – Paweł Wojciechowski, <a href="mailto:iod@reo.pl">iod@reo.pl</a>.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> I. Postanowienia ogólne</h3>
            <p>
              Uzyskane dane osobowe wykorzystujemy tylko w konkretnych celach w jakich dane te zostały zebrane. Zakres danych osobowych, cel ich przetwarzania, podstawa prawna takiego przetwarzania, okres przetwarzania i kategorie odbiorców, zostały opisane poniżej.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> II. Cel i czas przetwarzania danych</h3>
            <ul className="space-y-2">
              <li><strong>podjęcie działań na żądanie osoby</strong>, której dane dotyczą, przed zawarciem umowy - przygotowanie oferty – na podstawie art. 6 ust. 1 lit. b) Rozporządzenia; dane są przechowywane przez okres niezbędny do przedstawienia oferty i przez okres prowadzenia negocjacji;</li>
              <li><strong>podjęcie działań związanych z realizacją umowy</strong> - na podstawie Art. 6 ust. 1 lit. b) Rozporządzenia, dane przechowywane przez okres niezbędny do wykonania, rozwiązania lub wygaśnięcia umowy oraz przez okres, po którym przedawnią się ewentualne roszczenia;</li>
              <li><strong>prowadzenie kontaktu</strong> – na podstawie art. 6 ust. 1 lit. f) Rozporządzenia, w celu realizacji prawnie uzasadnionego interesu Administratora jakim jest:
                <ul className="mt-2 text-slate-600">
                  <li>zbieranie i przetwarzanie danych za pośrednictwem interaktywnego formularza udostępnionego przez Administratora a umożliwiającego zautomatyzowane tworzenie wzorów umów o których mowa powyżej;</li>
                  <li>umożliwienie kontaktu i udzielenie odpowiedzi na przesłane wiadomości poprzez formularze kontaktowe lub dane kontaktowe dostępne na stronie;</li>
                </ul>
                dane osobowe przechowywane są przez okres prowadzenia kontaktu a następnie do czasu przedawnienia roszczeń;
              </li>
              <li><strong>prowadzenie marketingu bezpośredniego w ramach kontaktu telefonicznego</strong> - na podstawie art. 6 ust. 1 lit f RODO w związku z art. 398 ustawy Prawo Komunikacji Elektronicznej, w sytuacji wyrażenia zgody na taki kontakt; dane są przechowywane przez okres prowadzenia działań marketingowych, o ile wcześniej nie zostanie wycofana zgoda;</li>
              <li><strong>przesyłanie drogą elektroniczną informacji o nowych rozwiązaniach produktu</strong> - na podstawie na podstawie art. 6 ust. 1 lit f RODO w związku z art. 398 ustawy Prawo Komunikacji Elektronicznej „zgoda osoby, której dane dotyczą”; dane przechowywane są do momentu wycofania zgody przez osobę, której dane dotyczą, na dalsze przetwarzanie jej danych w celach marketingowych;</li>
              <li><strong>przesyłanie drogą elektroniczną zamówionego Newslettera</strong> - na podstawie Art. 6 ust. 1 lit. a) Rozporządzenia „zgoda osoby, której dane dotyczą”; dane przechowywane są do momentu wycofania zgody przez osobę, której dane dotyczą, na dalsze przetwarzanie jej danych;</li>
              <li><strong>przetwarzanie danych osobowych w związku z dochodzeniem roszczeń lub obroną przed roszeniami</strong> – na podstawie art. 6 ust. 1 lit. f) Rozporządzenia; w celu realizacji prawnie uzasadnionego interesu Administratora rozumianego jako obrona swoich praw; dane przechowywane są do czasu upływu terminów przedawnienia roszczeń, a w przypadku zainicjowania sporu – do czasu jego prawomocnego zakończenia;</li>
              <li><strong>prowadzenie profili w mediach społecznościowych</strong> – na podstawie art. 6 ust. 1 lit. f) Rozporządzenia, w celu realizacji prawnie uzasadnionego interesu administratora jakim jest umożliwienie dotarcia do szerszego grona odbiorców i prowadzenia działań informacyjnych, w tym promowania prowadzonej działalności; dane przechowywane są przez prowadzenia profilu lub do czasu wycofania przez użytkownika portalu aktywności.</li>
              <li>w przypadku plików cookies wykorzystywanych do celów marketingowych oraz innych wymagających uzyskania zgody, podstawą przetwarzania danych osobowych jest zgoda użytkownika (art. 6 ust. 1 lit. a RODO) wyrażona za pośrednictwem ustawień plików cookies.</li>
              <li>prowadzenie działań marketingu bezpośredniego oraz pozyskiwania nowych klientów (prospecting), w tym identyfikacja podmiotów zainteresowanych ofertą Administratora oraz nawiązywanie relacji biznesowych – na podstawie art. 6 ust. 1 lit. f RODO (uzasadniony interes Administratora polegający na rozwoju działalności gospodarczej); dane są przetwarzane do czasu wniesienia sprzeciwu lub utraty ich przydatności biznesowej.</li>
            </ul>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> III. Zbierane dane osobowe</h3>
            <p>
              Dane osobowe są zbierane od Państwa w trakcie zakładania konta uczestnika, korzystania ze strony, przekazywania oferty lub wypełnienia formularzy odbiorcy, wytwórcy dla możliwości podjęcia czynności związanych z zawieraniem i późniejszym wykonywaniem umów lub innych formularzy kontaktowych dostępnych na stronie internetowej Administratora.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> IV. Pliki cookies</h3>
            <p>
              Na stronie internetowej www.reo.pl używamy plików cookies lub podobne technologie w celu zapewnienia dostępu do Serwisu, dostosowanie zawartości strony internetowej do Twoich preferencji oraz optymalizacji korzystania z tej strony.
            </p>
            <p>
              Możesz samodzielnie skonfigurować przeglądarkę internetową na swoim urządzeniu w taki sposób, aby automatycznie akceptowała ona otrzymywanie plików cookies, każdorazowo powiadamiała Cię o przesyłaniu plików cookies na Twoje urządzenie lub całkowicie blokowała otrzymywanie plików cookies.
            </p>
            
            <h4 className="font-bold">Czym są pliki cookies i podobne technologie</h4>
            <p>
              Cookies (z ang. cookie – ciastko) to małe pliki, które strona internetowa zapisuje w przeglądarce internetowej na Twoim urządzeniu, w czasie korzystania z serwisu. Podobne technologie to m.in. local storage, session storatege, oraz service workers.
            </p>

            <h4 className="font-bold">W jakim celu wykorzystujemy pliki cookies?</h4>
            <ul>
              <li>do zapisu wyborów oraz preferencji dokonanych przez Ciebie na formularzach obsługowych;</li>
              <li>w celach statystycznych do analiz dotyczących ruchu oraz odwiedzin na stronie internetowej;</li>
              <li>do lepszego dopasowania naszych komunikatów marketingowych do Twoich potrzeb;</li>
              <li>do prowadzenia działań marketingowych oraz identyfikacji podmiotów zainteresowanych ofertą.</li>
            </ul>

            <h4 className="font-bold">Adres IP i bezpieczeństwo</h4>
            <p>
              Dane o adresie IP są zapisywane w logach systemowych strony internetowej. Dane przesyłane w plikach cookies są bezpieczne i w żaden sposób nie wpływają na działanie Twojego urządzenia. Dane w plikach cookies przesyłane są w postaci zaszyfrowanej.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> V. Odbiorcy danych osobowych</h3>
            <p>
              W celu realizacji Umowy oraz w celu zapewnienia prawidłowego działania stron, Administrator danych osobowych korzysta z usług współpracujących z nim podmiotów zewnętrznych tj: poczta, kurierzy, podmioty usług prawnych, finansowych, CRM, analitycznych.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> VI. Prawa osoby, której dane są przetwarzane</h3>
            <p>
              Przetwarzanie danych osobowych nie wymaga zgody, jeżeli m.in.: przetwarzanie jest konieczne do wykonania Umowy. W przypadku gdy wyrażenie zgody jest niezbędne, Administrator prosi o jej wyrażenie. Udzieloną zgodę można wycofać w dowolnym momencie.
            </p>
            <p>
              Osobie, której dane dotyczą, przysługuje prawo żądania dostępu do swoich danych, sprostowania, usunięcia, ograniczenia przetwarzania, prawo wniesienia sprzeciwu oraz prawo do przenoszenia danych. Wniosek należy złożyć na e-mail: <a href="mailto:rodo@reo.pl">rodo@reo.pl</a>.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> VII. Informacja o dobrowolności podania danych</h3>
            <p>
              Podanie przez Państwa swoich danych osobowych jest dobrowolne, ale warunkuje możliwość podjęcia działań przez Administratora w celu realizacji celu kontaktu lub Umowy.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> VIII. Zautomatyzowane podejmowanie decyzji</h3>
            <p>
              W ramach korzystania z formularza przekazywanego przez Administratora, dane generują umowy zautomatyzowanie, jednak profilowanie nie wywołuje skutków prawnych dla osoby.
            </p>

            <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-green" /> IX. Postanowienia końcowe</h3>
            <p>
              W zakresie nieuregulowanym obowiązują przepisy prawa polskiego oraz RODO. Zastrzegamy sobie prawo do aktualizacji. W przypadku istotnej zmiany zostaną Państwo poinformowani.
            </p>
            
            <p className="mt-8 text-sm text-slate-500 italic">
               Data ostatniej aktualizacji treści Polityki: 01.04.2026.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
