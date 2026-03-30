import DiningEvent from "@/components/DiningEvent";
import HeroSection from "@/components/HeroSection";
import Menu from "@/components/Menu";
import SpecialSection from "@/components/SpecialSection";
import FooterSection from "@/components/FooterSection";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  return (
    <>
      <main className="max-w-384 w-full mx-auto">

        <header className="min-h-[89vh] h-fit">
          <HeroSection />
        </header>

        <SpecialSection />
        <Menu />
        <DiningEvent />
        <AboutSection />

        <footer className="min-h-[60vh] h-fit relative">
          <FooterSection />
        </footer>
      </main>
    </>
  );
}
