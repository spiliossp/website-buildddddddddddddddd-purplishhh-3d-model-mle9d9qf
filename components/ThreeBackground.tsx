"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} wireframe opacity={0.6} transparent />
    </mesh>
  );
}

function Scene() {
  const shapes = [
    { position: [-4, 2, -5], color: "#7C3AED", speed: 0.5 },
    { position: [4, -1, -5], color: "#4F46E5", speed: 0.3 },
    { position: [0, 3, -6], color: "#A78BFA", speed: 0.4 },
    { position: [-3, -2, -4], color: "#6366F1", speed: 0.6 },
    { position: [3, 2, -7], color: "#8B5CF6", speed: 0.35 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} position={shape.position as [number, number, number]} />
      ))}
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}