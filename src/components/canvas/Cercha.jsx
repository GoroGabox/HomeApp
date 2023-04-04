import React, { useRef, useMemo } from "react"
import { useGLTF } from "@react-three/drei";

function Cercha({ancho, ubicacion, altura}) {

    const {scene} = useGLTF("./cercha/cercha.glb");
    const copia = useMemo(() => scene.clone(), [scene])
    const mesh = useRef()

    return (
            <mesh
                ref={mesh}
                position={[0,altura/2,ubicacion]}
            >
                <hemisphereLight intensity={0.15} groundColor='black' />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    shadow-mapSize={1024}
                />
                <spotLight
                    position={[20, 50, -10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    shadow-mapSize={1024}
                />
                <pointLight intensity={1} />

                <primitive
                    object={copia}
                    scale={[ancho*5/12,ancho/4,1]}
                />
            </mesh>
    ) 
}

export default Cercha
