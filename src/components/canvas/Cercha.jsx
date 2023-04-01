import React, { useRef } from "react"
import { woodTexture } from "../../images/textures"

function Cercha({ancho, longitud, altura}) {
    const mesh = useRef()
    const grosor = 0.1
    const radialSegments = 3

    return (
            <mesh
                ref={mesh}
                position={[0,altura,0]}
                rotation={[Math.PI*3/2,0,Math.PI]}
            >
            <cylinderGeometry  args={[ancho/2, ancho/2, grosor,radialSegments]}/>
            <meshBasicMaterial color={'#9c1a06'}/>
            </mesh>
    ) 
}

export default Cercha
