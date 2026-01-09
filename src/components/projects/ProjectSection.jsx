"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HologramCodeBackground from "../background/HoloGramCode";

export default function ProjectsSection() {
  const projects = [
    { title: "Autonomous Line Follower", img: "/bot1.png" },
    { title: "Robotic Arm Controller", img: "/bot2.png" },
    { title: "Drone Navigation AI", img: "/bot3.png" },
    { title: "IoT Smart Home System", img: "/bot4.png" },
    { title: "Humanoid Balance Bot", img: "/bot5.png" },
  ];

  const looped = [...projects, ...projects];

  return (
    <section className="relative flex flex-col items-center gap-15 min-h-screen py-24  overflow-hidden">
      
      <HologramCodeBackground />

      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12 z-2">
        Our Projects
      </h2>

      <div className="max-w-6xl overflow-hidden p-4 h-105 relative z-2">
        <motion.div
          className="flex space-x-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {looped.map((p, i) => (
            <Card
              key={i}
              className="
                min-w-[320px] h-95
                bg-black/40 backdrop-blur-xl
                border border-cyan-300/20
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
                hover:scale-[1.07] hover:-rotate-1
                transition-all duration-300
              "
            >
              <CardContent className="flex flex-col items-center p-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-40 object-contain mb-4 drop-shadow-[0_0_25px_rgba(0,255,255,0.55)]"
                />
                <h3 className="text-cyan-300 text-lg font-semibold text-center">
                  {p.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#05070a] to-transparent z-3" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#05070a] to-transparent z-3" />
    </section>
  );
}
