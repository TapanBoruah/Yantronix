"use client";

import { events } from "@/components/events/event-data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CircuitBackground from "@/components/background/Background";
import HologramCodeBackground from "@/components/background/HoloGramCode";
import { Card, CardContent } from "@/components/ui/card";

export default function EventsPage() {
  const navigate = useNavigate();

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center py-24 overflow-hidden bg-[#05070a]">
      
      <CircuitBackground />
      <HologramCodeBackground />

      <div className="relative z-10 w-full flex flex-col items-center">

        <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-16">
          Our Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
          {events.map((event) => (
            <Card
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="cursor-pointer bg-black/40 backdrop-blur-xl border border-cyan-300/20 hover:scale-105 transition"
            >
              <CardContent className="p-5 flex flex-col items-center">
                <img
                  src={event.cover}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-cyan-300 text-lg font-semibold">
                  {event.title}
                </h3>
                <p className="text-white/60 text-sm">{event.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#05070a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#05070a] to-transparent" />
    </section>
  );
}
