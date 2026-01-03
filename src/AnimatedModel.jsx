import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"

export default function AnimatedModel() {
  const ref = useRef()
  const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}models/3d.glb`)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    actions[Object.keys(actions)[0]]?.play()

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set("white")
        child.material.metalness = 0.3
        child.material.roughness = 0.4
      }
    })
  }, [actions])

  // slow rotation
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.05}
      position={[0, -0.5, 0]}
    />
  )
}
