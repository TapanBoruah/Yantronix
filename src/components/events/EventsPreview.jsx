"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "./event-data";
import CircuitBackground from "@/components/background/Background";
import HologramCodeBackground from "../background/HoloGramCode";
import { Card, CardContent } from "@/components/ui/card";

export default function EventsPreview() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [stripWidth, setStripWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setStripWidth(scrollRef.current.scrollWidth);
    }
  }, []);

  return (
    <section
      id="events"
      className="relative min-h-screen flex flex-col items-center py-24 overflow-hidden bg-[#05070a]"
    >
      <CircuitBackground />
      <HologramCodeBackground />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-pink-600 py-14">
          Our Events
        </h2>

        {/* Marquee Container */}
        <div className="w-full max-w-4xl overflow-hidden px-4 sm:px-6">
          <motion.div
            ref={scrollRef}
            className="flex space-x-6 sm:space-x-8 p-4"
            initial={{ x: "100%" }}                 // start at right edge
            animate={{ x: `-${stripWidth}px` }}    // move fully left
            transition={{
              duration: 100,   // ⬅️ slightly slower speed
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...events,...events].map((event) => (
              <Card
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                className="
                  cursor-pointer
                  min-w-60 sm:min-w-72 lg:min-w-80
                  h-72
                  bg-black/40 backdrop-blur-xl
                  border border-cyan-300/20
                  shadow-[0_0_20px_rgba(0,255,255,0.15)]
                  hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
                  hover:scale-[1.06]
                  transition-all duration-100
                "
              >
                <CardContent className="flex flex-col items-center p-5">
                  <img
                    src={event.cover}
                    alt={event.title}
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-cyan-300 text-lg font-semibold text-center">
                    {event.title}
                  </h3>
                  <p className="text-white/60 text-sm">{event.date}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <button
          onClick={() => navigate("/events")}
          className="mt-10 px-6 py-3 border border-cyan-400 text-cyan-300 rounded-xl
                     hover:bg-cyan-400/10 transition"
        >
          View All Events →
        </button>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#05070a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#05070a] to-transparent" />
    </section>
  );
}
