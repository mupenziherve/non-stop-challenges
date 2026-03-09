import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
 <Navbar />
      <div className="container mt-40 mx-auto ">
        <HeroSection />
      </div>

    </main>
  );
}
