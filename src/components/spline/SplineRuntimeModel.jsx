// "use client";

// import { useEffect, useRef } from "react";
// import { Application } from "@splinetool/runtime";

// export default function Hero() {
//   const canvasRef = useRef(null);
//   let app = null;

//   useEffect(() => {
//     app = new Application(canvasRef.current);
//     app.load("https://prod.spline.design/fPddBU4TT0rfcdFJ/scene.splinecode");

//     return () => {
//       // ✅ Remove builtin Spline when component unmounts
//       app?.dispose();
//       canvasRef.current?.remove();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: "100%", height: "100vh" }}
//     />
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function SplineRuntimeModel() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);

    app
      .load("https://prod.spline.design/fPddBU4TT0rfcdFJ/scene.splinecode")
      .then(() => {
        // 🔥 REMOVE WATERMARK HERE
        app._childNodes.forEach((node) => {
          if (
            node?.name?.toLowerCase()?.includes("spline") ||
            node?.name?.toLowerCase()?.includes("logo")
          ) {
            node.visible = false;
          }
        });
      });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
}
