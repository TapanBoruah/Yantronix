import { motion, useMotionValue, useTransform } from "framer-motion";
import RobotModel from "../model/RobotModel";

export default function AboutSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [6, -6]);
  const rotateY = useTransform(mouseX, [-200, 200], [-6, 6]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#05070a] px-6">

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),
            linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)]
          bg-size-[40px_40px]
          opacity-30
        "
      />
      <motion.div
        className="pointer-events-none absolute w-105 h-105 rounded-full bg-cyan-400/10 blur-3xl"
        style={{ x: mouseX, y: mouseY }}
      />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl">
        <div className="flex justify-center">
          <RobotModel/>
        </div>
        <motion.div
          onMouseMove={handleMouseMove}
          style={{ rotateX, rotateY }}
          className="
            max-w-xl
            rounded-2xl border border-cyan-500/20
            bg-black/60 backdrop-blur-xl
            p-10 text-center
            shadow-[0_0_80px_rgba(0,255,255,0.12)]
          "
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">
            About Yantronix
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Yantronix is a student-driven robotics and embedded systems community
            focused on building intelligent machines, low-level hardware solutions,
            and future-ready automation. From microcontrollers to autonomous robots,
            we design, prototype, and innovate.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300">
              Embedded Systems
            </span>
            <span className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300">
              Robotics
            </span>
            <span className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300">
              Electronics
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
