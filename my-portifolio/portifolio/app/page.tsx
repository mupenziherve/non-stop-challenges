import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
 <Navbar />
      <div className="mt-16 px-12">
        <HeroSection />
      </div>

    </main>
  );
}
