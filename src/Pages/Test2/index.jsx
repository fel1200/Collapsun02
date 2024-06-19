import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function Test2() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />

      <mesh>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
