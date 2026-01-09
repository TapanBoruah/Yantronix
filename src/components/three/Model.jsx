import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useMouseRobot from "@/hooks/useMouseRobot";

export default function Model() {
  const ref = useRef();
  const mouse = useMouseRobot();
  const { scene } = useGLTF("/robot1.glb");

  const baseY = -0.3; 

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.6,
      0.05
    );

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * 0.4,
      0.05
    );

    ref.current.position.y =
      baseY + Math.sin(Date.now() * 0.002) * 0.1;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.5}
    />
  );
}
