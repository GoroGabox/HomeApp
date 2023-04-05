import React from "react";
import { useGLTF } from "@react-three/drei";

const Avatars = ({ancho, longitud, altura}) => {
    
    const avatar = useGLTF("./avatar/scene.gltf");
  
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={.1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={avatar.scene}
          rotation={[0, 1, 0]}
          scale={[1/90,1/90,1/90]}
          position={[0,-altura/2,0]}
        />
      </mesh>
    );
  };

export default Avatars;
