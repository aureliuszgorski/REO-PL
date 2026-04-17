import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import ClientsGallery from "@/components/home/ClientsGallery";
import ArchitectureGrid from "@/components/home/ArchitectureGrid";
import Workflow from "@/components/home/Workflow";
import AnimatedStats from "@/components/home/AnimatedStats";
import NetworkAnimation from "@/components/home/NetworkAnimation";
import Calculator from "@/components/home/Calculator";
import EsgNews from "@/components/home/EsgNews";
import Partners from "@/components/home/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1 flex flex-col w-full">
        <NetworkAnimation />
        <Hero />
        <ClientsGallery />
        <Workflow />
        <ArchitectureGrid />
        <AnimatedStats />
        
        {/* Container for Calculator to give it breathing room on light bg */}
        <div className="bg-slate-50 relative pb-12">
           <Calculator />
        </div>
        
        <EsgNews />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
