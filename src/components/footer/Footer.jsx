"use client";

import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleScrollNavigate = (hash) => {
    navigate(`/${hash}`);
  };

  return (
    <footer id = "footer" className="relative w-full bg-[#05070a] text-gray-300 pt-16 pb-10 border-t border-cyan-400/10 overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400/30 blur-[2px]" />

      {/* Radial Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.3),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 z-10 relative">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            Yantronix
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A student-driven robotics and embedded systems club focused on
            innovation, automation, and intelligent machines.
          </p>
        </div>

        {/* Quick Links (SCROLL) */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <button
                onClick={() => handleScrollNavigate("#home")}
                className="hover:text-cyan-300 transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollNavigate("#about")}
                className="hover:text-cyan-300 transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollNavigate("#projects")}
                className="hover:text-cyan-300 transition"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollNavigate("#team")}
                className="hover:text-cyan-300 transition"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollNavigate("#contact")}
                className="hover:text-cyan-300 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Connect
          </h3>

          <div className="flex space-x-5 text-gray-300">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Facebook size={22} />
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <p>
              Email:{" "}
              <span className="text-cyan-300">yantronix@gmail.com</span>
            </p>
            <p>Location: Your College Campus</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-14 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yantronix. All Rights Reserved.
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-cyan-400/10 blur-xl" />
    </footer>
  );
}
