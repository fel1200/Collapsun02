import { BrowserRouter, useRoutes } from "react-router-dom";
import Test1 from "../Test1";
import Test2 from "../Test2";
import Test3 from "../Test3";
import Test4 from "../Test4";

import { useLoader, Canvas } from "@react-three/fiber";

//To import the Materials
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

//To import the object
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

//import class
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/test1", element: <Test1 /> },
    { path: "/test2", element: <Test2 /> },
    { path: "/test3", element: <Test3 /> },
    { path: "/test4", element: <Test4 /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div className="bodyApp">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
