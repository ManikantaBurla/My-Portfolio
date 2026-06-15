import { Stars, OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'

export const Scene = () => {
  return (
    <>
      <color attach="background" args={['#030712']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <mesh scale={2.5}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#0067b8" 
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      </Float>

      <Sphere args={[1, 100, 100]} scale={10}>
        <MeshDistortMaterial
          color="#1d4ed8"
          attach="material"
          distort={0.4}
          speed={0.5}
          roughness={0}
          transparent
          opacity={0.1}
        />
      </Sphere>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}