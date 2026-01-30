"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* Load & center the GLB model */
function Model({ model, scale }) {
  const { scene } = useGLTF(model);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // center model
  }, [scene]);

  return <primitive object={scene} scale={scale ?? 1} />;
}

export default function Component3D({ model, scale }) {
  // Safety check (prevents white screen)
  if (!model || typeof model !== "string") {
    return (
      <div className="h-64 w-full rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 text-sm">
        3D model not available
      </div>
    );
  }

  return (
    <div className="h-64 w-full rounded-xl border border-slate-700 bg-slate-900">
      <Canvas camera={{ position: [0, 1.8, 4] }}>
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        {/* Model */}
        <Suspense fallback={null}>
          <Model model={model} scale={scale} />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
