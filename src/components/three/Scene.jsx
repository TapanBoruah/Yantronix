import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Model from "./Model"
import Lights from "./Lights"

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 1.5], fov: 45 }}
      dpr={[1, 2]}
    >
      <Lights />
      <Environment preset="city" />
      <Model />
    </Canvas>
  )
}
