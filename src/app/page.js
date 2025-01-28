import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';
import ContactMe from './components/ContactMe';
import './globals.css';

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] min-h-screen m-0 p-0 bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-0">
        <HeroSection />
        <ProjectsSection />
        <AchievementsSection />
        <AboutSection />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
