import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useLoader } from "@react-three/fiber";
import { Edges, useSelect } from "@react-three/drei";

export default function Test3() {
  //create a function to show a STL file
  function Model() {
    const stl = useLoader(STLLoader, "/models/3d-printed-rocket.stl");
    return (
      <>
        <mesh>
          <primitive object={stl} />
          <Edges />
        </mesh>
      </>
    );
  }

  return (
    <Canvas>
      <mesh>
        <primitive object={Model()} />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}
