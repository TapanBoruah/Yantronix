"use client";

import { motion } from "framer-motion";

export default function HologramCodeBackground() {
  const codeLines = [
    "int sensor = analogRead(A0);",
    "float dist = (sensor/1023.0)*5.0;",
    "robot.moveForward(dist);",
    "if(dist < 2.0) robot.stop();",
    "digitalWrite(LED, HIGH);",
    "motorSpeed = map(sensor,0,1023,0,255);",
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* REPEATED FLOATING CODE LINES */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/20 font-mono text-xs whitespace-nowrap"
          style={{
            top: `${Math.random() * 100}%`,
            left: "-50%",
            rotate: `${Math.random() * 6 - 3}deg`,
          }}
          animate={{ x: ["150%", "-80%"] }}
          transition={{
            repeat: Infinity,
            duration: 12 + Math.random() * 10,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {codeLines.join("   •   ").repeat(4)}
        </motion.div>
      ))}

      {/* SOFT CYAN GLOW OVERLAY */}
      <div className="absolute inset-0 bg-cyan-400/5 blur-3xl"></div>
    </div>
  );
}
