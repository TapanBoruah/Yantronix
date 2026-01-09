import React from "react";
import CircuitBackground from "@/components/background/Background";
import SplineModel from '@/components/spline/SplineModel';
import AboutSection from "@/components/about/About";
import ProjectsSection from "@/components/projects/ProjectSection";


export default function Home() {
  return (
    <>
    <CircuitBackground />
    <SplineModel/>
    <AboutSection/>
    <ProjectsSection/>
    </>
  );
}
