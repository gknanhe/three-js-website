import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import CanvasLoader from "../components/Loader";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
const canvasStyle = {
  width: "100%", // Set canvas width to 100% of its parent
  height: "100vh",
};
const CanvasModel = () => {
  return (
    <div style={canvasStyle}>
      {/* Set container size */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 2.5], fov: 30 }} //position: [0, 0, 0]
        gl={{ preserveDrawingBuffer: true }}
        eventPrefix="client"
        className="w-full h-full  transition-all ease-in"
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1.1} /> {/*2.9*/}
          {/* //give texture to image */}
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
          {/* Give Model position and animation effects  */}
          <CameraRig>
            {/* Create a background shadows effect  */}
            <Backdrop />
            <Center>
              <Shirt />
            </Center>
          </CameraRig>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasModel;
