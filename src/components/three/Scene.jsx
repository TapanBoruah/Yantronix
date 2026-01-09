import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1,2]}>
      <Lights />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
}
