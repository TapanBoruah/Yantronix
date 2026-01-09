"use client";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* MAIN NAVBAR */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 flex h-16 items-center justify-between
                     rounded-2xl border border-white/10
                     bg-black/40 backdrop-blur-xl
                     shadow-white shadow-md"
        >
          <div className="flex items-center gap-3 pl-4">
            <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
              🤖
            </div>
            <span className="text-white font-semibold tracking-wide">
              यंत्रONIX
            </span>
          </div>

          <nav className="hidden md:flex items-center mx-auto gap-9">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className="text-sm text-white/70 transition-colors group-hover:text-white"
                >
                  {item.name}
                </Link>

                <span
                  className="absolute left-0 -bottom-1 h-px w-0
                             bg-white transition-all duration-300
                             group-hover:w-full"
                />
              </motion.div>
            ))}
          </nav>

          <button
            className="md:hidden text-white pr-4"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl 
                         border-l border-white/10 shadow-xl p-6 z-80"
            >
              <button className="text-white mb-6" onClick={() => setOpen(false)}>
                <X size={28} />
              </button>

              <nav className="flex flex-col space-y-6 text-white text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.aside>

            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-70"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
