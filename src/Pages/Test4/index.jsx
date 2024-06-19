import { useLoader, Canvas } from "@react-three/fiber";

//To import the Materials
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

//To import the object
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

//To import the Suspense
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

//to import styles
import "./Test4.css";

function Model() {
  const materials = useLoader(
    MTLLoader,
    "src/assets/models/Bambo_House_obj/Bambo_House.mtl"
  );
  //console.log("materials", materials);
  const obj = useLoader(
    OBJLoader,
    "src/assets/models/Bambo_House_obj/Bambo_House.obj",
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );
  //console.log("obj", obj);
  return <primitive object={obj} scale={0.4} />;
}

export default function Test4() {
  return (
    <div className="test4Body">
      <div className="test4Container">
        <h1>Test 4</h1>
        <p>Load a 3D Model with MTL and OBJ files</p>
        <Canvas className="canvasModel">
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <ambientLight intensity={3.0} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
