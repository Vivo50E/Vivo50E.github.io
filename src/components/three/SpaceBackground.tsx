import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function makeGlowTexture(color: string) {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, color)
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function Nebulae() {
  const amberTex = useMemo(() => makeGlowTexture('rgba(251,191,36,0.35)'), [])
  const cyanTex = useMemo(() => makeGlowTexture('rgba(34,211,238,0.3)'), [])
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.005
  })

  return (
    <group ref={group}>
      <sprite position={[-18, 8, -40]} scale={[46, 46, 1]}>
        <spriteMaterial map={amberTex} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.5} />
      </sprite>
      <sprite position={[22, -10, -55]} scale={[54, 54, 1]}>
        <spriteMaterial map={cyanTex} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.4} />
      </sprite>
    </group>
  )
}

function Rig() {
  const { camera } = useThree()
  const target = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useFrame((_, delta) => {
    camera.rotation.y += (target.current.x * 0.05 - camera.rotation.y) * Math.min(1, delta * 1.2)
    camera.rotation.x += (-target.current.y * 0.03 - camera.rotation.x) * Math.min(1, delta * 1.2)
    camera.position.y += (-scrollY.current * 0.0025 - camera.position.y) * Math.min(1, delta * 1.2)
  })

  return null
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 1], fov: 75 }}
      >
        <Rig />
        <Stars radius={100} depth={60} count={3500} factor={3.2} saturation={0} fade speed={0.4} />
        <Nebulae />
      </Canvas>
    </div>
  )
}
