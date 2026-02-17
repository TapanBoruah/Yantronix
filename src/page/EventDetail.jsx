"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { events } from "@/components/events/event-data";
import CircuitBackground from "@/components/background/Background";
import HologramCodeBackground from "@/components/background/HoloGramCode";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  // ✅ FIX: always open page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05070a] text-white">
        Event not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden bg-[#05070a]">

      {/* Mesh network background */}
      <CircuitBackground />

      {/* Floating hologram code */}
      <HologramCodeBackground />

      {/* Edge glow overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#05070a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#05070a] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Back Button */}
        <button
          onClick={() => navigate("/events")}
          className="mb-8 text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Events
        </button>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">
          {event.title}
        </h2>

        {/* Meta */}
        <p className="text-white/60 mb-2">{event.date}</p>
        <p className="text-white/80 mb-12 max-w-3xl">
          {event.description}
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {event.photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-cyan-300/10"
            >
              <img
                src={photo}
                alt={`${event.title} photo ${index + 1}`}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Neon hover overlay */}
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
