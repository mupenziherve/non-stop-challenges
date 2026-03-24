import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
 <Navbar />
      <div className="container mt-40 mx-auto ">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
        <Footer/>
        </div>
 
    </main>
  );
}
