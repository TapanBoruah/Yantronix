"use client";
import React from "react";

export default function Component3D({ label }) {
  return (
    <div className="h-64 w-full rounded-xl border border-slate-700 bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      {/* Replace with Spline or Three.js later */}
      <span className="text-sm text-slate-400">
        3D Model Area – {label}
      </span>
    </div>
  );
}
