import React from "react";
import CircuitBackground from "@/components/background/Background";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/About";
import ProjectsSection from "@/components/projects/ProjectSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventsPreview from "@/components/events/EventsPreview";


export default function Home() {
  const location = useLocation();
  
  useEffect(() => {
    const target = location.state?.scrollTo;

    if (target) {
      setTimeout(() => {
        const section = document.getElementById(target);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return (
    <>
      <CircuitBackground />

      <section className="relative w-full">
        
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="events" className="min-h-screen">
          <EventsPreview />
        </section>
      </section>
    </>
  );
}
