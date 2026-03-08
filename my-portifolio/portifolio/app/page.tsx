import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* Navbar */}
      <Navbar />

      {/* Space between navbar and hero */}
      <div className="mt-16 px-12">
        <HeroSection />
      </div>

    </main>
  );
}
