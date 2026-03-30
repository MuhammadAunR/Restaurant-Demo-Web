import DiningEvent from "@/components/DiningEvent";
import HeroSection from "@/components/HeroSection";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import SpecialSection from "@/components/SpecialSection";
import FooterSection from "@/components/FooterSection";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  return (
    <>
      <main className="max-w-384 w-full mx-auto">

        <header className="min-h-screen h-fit">
          <Navbar />
          <HeroSection />
        </header>

        <SpecialSection />
        <Menu />
        <DiningEvent />
        <AboutSection />

        <footer className="min-h-screen h-fit relative">
          <FooterSection />
        </footer>
      </main>
    </>
  );
}
