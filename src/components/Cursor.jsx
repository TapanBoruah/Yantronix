import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full 
                 border border-cyan-400 z-999
                 pointer-events-none mix-blend-difference"
      animate={{ x: pos.x - 16, y: pos.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
