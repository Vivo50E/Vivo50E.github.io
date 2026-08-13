import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function makeDiskTexture() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const cx = size / 2
  const cy = size / 2
  const outer = size / 2
  const inner = outer * 0.34

  // base warm-to-transparent disk gradient
  const base = ctx.createRadialGradient(cx, cy, inner * 0.9, cx, cy, outer)
  base.addColorStop(0, 'rgba(255,205,120,0.85)')
  base.addColorStop(0.35, 'rgba(255,160,60,0.55)')
  base.addColorStop(0.75, 'rgba(120,70,180,0.18)')
  base.addColorStop(1, 'rgba(20,10,40,0)')
  ctx.fillStyle = base
  ctx.beginPath()
  ctx.arc(cx, cy, outer, 0, Math.PI * 2)
  ctx.fill()

  // angular turbulence streaks
  for (let a = 0; a < 360; a += 1) {
    const rad = (a * Math.PI) / 180
    const jitter = 0.85 + Math.sin(a * 0.15) * 0.08 + Math.random() * 0.07
    const hot = a % 37 < 4
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(rad)
    ctx.beginPath()
    ctx.moveTo(inner * jitter, 0)
    ctx.lineTo(outer, 0)
    ctx.lineWidth = 2.4
    ctx.strokeStyle = hot ? 'rgba(255,244,214,0.9)' : 'rgba(255,170,70,0.5)'
    ctx.stroke()
    ctx.restore()
  }

  // bright photon ring near the inner edge
  const rim = ctx.createRadialGradient(cx, cy, inner * 0.9, cx, cy, inner * 1.15)
  rim.addColorStop(0, 'rgba(0,0,0,0)')
  rim.addColorStop(0.6, 'rgba(255,235,200,0.9)')
  rim.addColorStop(1, 'rgba(255,235,200,0)')
  ctx.fillStyle = rim
  ctx.beginPath()
  ctx.arc(cx, cy, inner * 1.15, 0, Math.PI * 2)
  ctx.fill()

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

function makeGlowTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, 'rgba(255,225,180,0.9)')
  grad.addColorStop(0.4, 'rgba(255,180,90,0.35)')
  grad.addColorStop(1, 'rgba(255,180,90,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

function Gargantua() {
  const diskTex = useMemo(() => makeDiskTexture(), [])
  const glowTex = useMemo(() => makeGlowTexture(), [])
  const diskRef = useRef<THREE.Mesh>(null)
  const diskRef2 = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, delta) => {
    if (diskRef.current) diskRef.current.rotation.z += delta * 0.12
    if (diskRef2.current) diskRef2.current.rotation.z -= delta * 0.07
    if (groupRef.current) {
      groupRef.current.rotation.y += (target.current.x * 0.25 - groupRef.current.rotation.y) * Math.min(1, delta * 1.5)
      groupRef.current.rotation.x += (0.55 - target.current.y * 0.12 - groupRef.current.rotation.x) * Math.min(1, delta * 1.5)
    }
  })

  return (
    <group ref={groupRef} rotation={[0.55, 0, 0]}>
      {/* event horizon */}
      <mesh>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* soft glow halo */}
      <sprite scale={[2.4, 2.4, 1]}>
        <spriteMaterial map={glowTex} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.6} />
      </sprite>

      {/* accretion disk, primary */}
      <mesh ref={diskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.05, 2.5, 128]} />
        <meshBasicMaterial
          map={diskTex}
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          opacity={0.45}
        />
      </mesh>

      {/* thin lensed ring crossing in front, mimics light bending over the pole */}
      <mesh ref={diskRef2} rotation={[Math.PI / 2.35, 0, 0]}>
        <ringGeometry args={[1.15, 1.75, 128]} />
        <meshBasicMaterial
          map={diskTex}
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

export default function Wormhole() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 8.5], fov: 45 }}
      >
        <Gargantua />
      </Canvas>
    </div>
  )
}
