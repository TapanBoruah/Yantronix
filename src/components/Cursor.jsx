import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      for (let i = 0; i < 4; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          life: 1.3, 
          size: 2 + Math.random() * 3,
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          life: p.life - 0.012,
        }))
        .filter((p) => p.life > 0);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full 
                   border border-cyan-400 pointer-events-none
                   mix-blend-screen z-99999999"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {particlesRef.current.map((p, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full bg-cyan-400 pointer-events-none z-999999"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.life,
            filter: "blur(4px) drop-shadow(0 0 6px rgba(0,255,255,0.8))",
          }}
          initial={{ scale: 1.8 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </>
  );
}
