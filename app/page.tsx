import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const resumePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "Harsha_Teja_Resume.pdf"
  );
  const resumeAvailable = fs.existsSync(resumePath);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero resumeAvailable={resumeAvailable} />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
