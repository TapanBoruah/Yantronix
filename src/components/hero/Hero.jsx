// import React from "react";
// import SplineRuntimeModel from "@/components/spline/SplineRuntimeModel";

// export default function Hero() {
//   return (
//     <div className="min-h-screen relative flex items-center justify-center px-4">
//       <SplineRuntimeModel />
//       <div className="absolute bottom-6 right-3 w-40 h-10 bg-black pointer-events-none" />
//     </div>
//   );
// }
import Scene from "../three/Scene";
import CircuitBackground from "../background/Background";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* background */}
      <CircuitBackground />

      {/* 3D robot */}
      <div className="sticky top-0 h-screen">
        <Scene />
      </div>
    </section>
  );
}
