"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate,useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", type: "scroll", target: "home" },
  { name: "About", type: "scroll", target: "about" },
  { name: "Projects", type: "scroll", target: "projects" },
  { name: "Events", type: "scroll", target: "events" },
  { name: "Glossary", type: "route", target: "/glossary" },
  { name: "Team", type: "route", target: "/team" },
  { name: "Contact", type: "scroll", target: "footer" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (item) => {
  if(item.type === "route") {
    navigate(item.target);
    setOpen(false); 
    return;
  }
  if (item.type === "scroll") {
    if (location.pathname === "/") {
      const section = document.getElementById(item.target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${item.target}`);
    }
  }

  else {
      navigate("/", { state: { scrollTo: item.target } });
  }

  setOpen(false);
  }
};


  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">

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
                <button
                  onClick={() => handleNavigate(item)}
                  className="text-sm text-white/70 bg-transparent
                             hover:text-white transition-colors"
                >
                  {item.name}
                </button>

                <span
                  className="absolute left-0 -bottom-1 h-px w-0
                             bg-white transition-all duration-300
                             group-hover:w-full"
                />
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white mr-3"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
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
              <Button
                variant="ghost"
                size="icon"
                className="text-white mb-6"
                onClick={() => setOpen(false)}
              >
                <X size={28} />
              </Button>

              <nav className="flex flex-col space-y-6 text-white text-lg">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigate(item)}
                    className="text-left hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </motion.aside>

            {/* Overlay */}
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
