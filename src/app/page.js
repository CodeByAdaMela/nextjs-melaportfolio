import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./about/AboutSection";
import ProjectsSection from "./projects/ProjectsSection";
import EmailSection from "./contactus/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Languages from "./skills/lang";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Languages />
        <AchievementsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
