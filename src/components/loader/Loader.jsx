"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function RealLoader({ onComplete }) {

  // Total animation duration: 2.7s
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // tell parent loader animation finished
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#05070a] z-[999] flex items-center justify-center overflow-hidden">

      {/* LEFT CAR */}
      <motion.div
        initial={{ x: "-200%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-24 h-12 bg-cyan-500 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.6)] flex items-center justify-center">
          🤖🚗
        </div>
      </motion.div>

      {/* RIGHT CAR */}
      <motion.div
        initial={{ x: "200%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-24 h-12 bg-pink-500 rounded-lg shadow-[0_0_20px_rgba(255,0,150,0.6)] flex items-center justify-center">
          🚗🤖
        </div>
      </motion.div>

      {/* FLASH */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.2 }}
        className="absolute w-20 h-20 bg-white rounded-full blur-3xl"
      />

      {/* TYRE */}
      <motion.div
        initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
        animate={{ x: 150, y: -120, rotate: 900, opacity: 1 }}
        transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
        className="absolute w-12 h-12 rounded-full border-4 border-gray-300 bg-black"
      />

    </div>
  );
}
