import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useXREvent, useXR } from '@react-three/xr'
import { Mesh } from 'three'

function DraggableBox() {
  const ref = useRef<Mesh>(null)
  const [isDragging, setIsDragging] = useState(false)
  const { controllers } = useXR()

  useXREvent('squeezestart', () => setIsDragging(true))

  useXREvent('squeezeend', () => setIsDragging(false))

  useFrame(() => {
    if (!isDragging || controllers.length < 1 || !ref.current) return

    const controller = controllers[0]
    ref.current.position.copy(controller.grip.position)
    ref.current.rotation.copy(controller.grip.rotation)
  })

  return (
    <mesh ref={ref} position={[-1, 1, -5]} scale={isDragging ? 1.2 : 1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  )
}

export default DraggableBox
