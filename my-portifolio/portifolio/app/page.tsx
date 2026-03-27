import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"
import Archievement from "./components/Archievement"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
 <Navbar />
      <div className="container mt-40 mx-auto ">
        <HeroSection />
        <Archievement></Archievement>
        <AboutSection/>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
        
        </div>
 <Footer/>
    </main>
  );
}
