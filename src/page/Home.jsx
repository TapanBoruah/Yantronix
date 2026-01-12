import React from "react";
import CircuitBackground from "@/components/background/Background";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/About";
import ProjectsSection from "@/components/projects/ProjectSection";


export default function Home() {
  return (
    <>
      <CircuitBackground />
    <section className="relative w-full h-full overflow-hidden">
        <Hero/>
        <AboutSection />
        <ProjectsSection/>
    </section>
    </>   
  );
}
