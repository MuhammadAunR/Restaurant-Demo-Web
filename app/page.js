import HeroSection from "@/components/HeroSection";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import SpecialSection from "@/components/SpecialSection";


export default function Home() {
  return (
    <>
      <main className="max-w-384 w-full mx-auto">

        <header className="h-screen">
          <Navbar />
          <HeroSection />
        </header>

        <SpecialSection />
        <Menu />
      </main>
    </>
  );
}
