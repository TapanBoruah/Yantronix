import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import useMouseRobot from "@/hooks/useMouseRobot"

export default function Model() {
  const ref = useRef()
  const mouse = useMouseRobot()
  const { camera } = useThree()
  const { scene } = useGLTF("/robot3.glb")

  const [done, setDone] = useState(false)

  // Camera targets
  const headTarget = useRef(new THREE.Vector3())
  const bodyTarget = useRef(new THREE.Vector3())
  const currentTarget = useRef(new THREE.Vector3())

  const endZ = 5.5

  /* ---------------- INITIAL SETUP ---------------- */
  useEffect(() => {
    // Center model
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    scene.position.sub(center)

    // Targets
    headTarget.current.set(0, size.y * 0.5, 0) // FACE
    bodyTarget.current.set(0, 0, 0)            // BODY CENTER
    currentTarget.current.copy(headTarget.current)

    // Camera start (face close-up)
    camera.position.set(
      0,
      headTarget.current.y,
      size.z * 0.6
    )

    camera.lookAt(headTarget.current)
  }, [scene, camera])

  /* ---------------- FRAME LOOP ---------------- */
  useFrame((_, delta) => {

    /* ---- ZOOM OUT PHASE ---- */
    if (!done) {
      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        endZ,
        0.03
      )

      // Lock focus on face during zoom
      currentTarget.current.lerp(headTarget.current, 0.2)
      camera.lookAt(currentTarget.current)

      if (Math.abs(camera.position.z - endZ) < 0.15) {
        setDone(true)
      }
      return
    }

    /* ---- FACE → BODY TRANSITION (SMOOTH) ---- */
    currentTarget.current.x = THREE.MathUtils.damp(
      currentTarget.current.x,
      bodyTarget.current.x,
      4,
      delta
    )

    currentTarget.current.y = THREE.MathUtils.damp(
      currentTarget.current.y,
      bodyTarget.current.y,
      4,
      delta
    )

    currentTarget.current.z = THREE.MathUtils.damp(
      currentTarget.current.z,
      bodyTarget.current.z,
      4,
      delta
    )

    camera.lookAt(currentTarget.current)

    /* ---- MOUSE INTERACTION ---- */
    if (!ref.current) return

    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      mouse.x * 0.6,
      8,
      delta
    )

    ref.current.rotation.x = THREE.MathUtils.damp(
      ref.current.rotation.x,
      mouse.y * 0.4,
      8,
      delta
    )
  })

  return <primitive ref={ref} object={scene} scale={0.5} />
}
