"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Scene() {
  try {
    const gltf = useGLTF("/models/lord_inquisitor_servo_skull.glb");
    return <primitive object={gltf.scene} scale={2} />;
  } catch (error) {
    console.error("Error loading model:", error);
    return null;
  }
}

export default function Model3DContent() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
} 