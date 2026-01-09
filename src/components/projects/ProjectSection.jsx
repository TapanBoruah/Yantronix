"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import HologramCodeBackground from "../background/HoloGramCode";
import { useRef, useState, useEffect } from "react";

export default function ProjectsSection() {
  const projects = [
    { title: "Autonomous Line Follower", img: "/bot1.png" },
    { title: "Robotic Arm Controller", img: "/bot2.png" },
    { title: "Drone Navigation AI", img: "/bot3.png" },
    { title: "IoT Smart Home System", img: "/bot4.png" },
    { title: "Humanoid Balance Bot", img: "/bot5.png" },
  ];

  const looped = [...projects, ...projects];

  const scrollRef = useRef(null);
  const [stripWidth, setStripWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.scrollWidth / 2; 
      setStripWidth(width);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center py-24 overflow-hidden">

      <HologramCodeBackground />

      <h2 className="text-center text-4xl sm:text-5xl font-bold text-pink-600 relative py-14 z-5">
        Our Projects
      </h2>

      <div className="w-full max-w-7xl overflow-hidden px-4 sm:px-6 h-auto sm:h-105 relative z-5">

        <motion.div
          ref={scrollRef}
          className="flex space-x-6 sm:space-x-8 p-4"
          animate={{ x: [0, -stripWidth] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
        >
          {looped.map((p, i) => (
            <Card
              key={i}
              className="
                min-w-55 sm:min-w-75 lg:min-w-85
                h-80 sm:h-90 lg:h-95
                bg-black/40 backdrop-blur-xl
                border border-cyan-300/20
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
                hover:scale-[1.06] hover:-rotate-1
                transition-all duration-300
              "
            >
              <CardContent className="flex flex-col items-center p-5 sm:p-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-28 sm:h-40 object-contain mb-4 drop-shadow-[0_0_25px_rgba(0,255,255,0.55)]"
                />
                <h3 className="text-cyan-300 text-base sm:text-lg font-semibold text-center">
                  {p.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-linear-to-r from-[#05070a] to-transparent z-3" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-linear-to-l from-[#05070a] to-transparent z-3" />
    </section>
  );
}
