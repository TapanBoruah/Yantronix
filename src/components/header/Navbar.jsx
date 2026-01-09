import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
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

          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className="text-sm text-white/70 transition-colors
                             group-hover:text-white"
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


          <div className="pr-4">
            <Button
              variant="secondary"
              className="rounded-xl bg-white text-black
                         hover:bg-white/90
                         shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              Join Us
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
