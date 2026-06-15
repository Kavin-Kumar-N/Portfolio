import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ProjectStats from "@/sections/ProjectStats";
import DashboardShowcase from "@/sections/DashboardShowcase";
import Certifications from "@/sections/Certifications";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <Hero />

      <About />
      <Skills />

      <Experience />

      <Projects />

      <ProjectStats />

      <DashboardShowcase />

      <Certifications />

      <Resume />

      <Contact />

      <Footer />
    </main>
  );
}
