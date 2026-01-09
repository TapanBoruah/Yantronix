import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function RotatingModel() {
  const { scene } = useGLTF("/robot.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.06; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={3} />;
}

export default function RobotModel() {
  return (
    <div className="w-full h-87.5 lg:h-125">
      <Canvas camera={{ position: [4, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <RotatingModel />

        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
