import { Canvas } from '@react-three/fiber';
import { House } from './index';
import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, Sky } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Scene({ancho, longitud, altura}) {
  return (
    <>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 10, 20], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}  
      >
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/4}
          />
        <gridHelper args={[13, 13]} position={[0,(-altura/2)-0.2,0]}/>
        <House  ancho={ancho} longitud={longitud} altura={altura}/>
      </Suspense>

      <Preload all />
      </Canvas>
    </>
  );
}

export default Scene;