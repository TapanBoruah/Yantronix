import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function RotatingModel() {
  const { scene } = useGLTF("/robot.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.015;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={4} />;
}

export default function RobotModel() {
  return (
    <div className="w-full h-87.5 sm:h-120 lg:h-137.5">
            <div className="w-full h-full pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [4, 2, 5], fov: 50 }}>
                  
          <ambientLight intensity={0.8} />
          <hemisphereLight
            skyColor={"#ffffff"}
            groundColor={"#444444"}
            intensity={1.1}
          />

          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            castShadow
          />
          <directionalLight
            position={[-5, 5, 5]}
            intensity={1.2}
          />
          <directionalLight
            position={[0, 5, -5]}
            intensity={1.3}
          />

          <pointLight
            position={[0, -2, 0]}
            intensity={1}
            color="#00ffff"
            distance={10}
          />

          <pointLight position={[8, 0, 0]} intensity={0.8} />
          <pointLight position={[-8, 0, 0]} intensity={0.8} />

          <RotatingModel />

          <OrbitControls enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>
    </div>
  );
}
