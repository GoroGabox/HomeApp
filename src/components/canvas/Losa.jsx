import React, { useRef } from "react"
import { dirtTexture } from "../../assets/images/textures"

function Losa({ancho, longitud, altura}) {
    const mesh = useRef()
    const alturaLosa = 0.2
	return (
		<>
			<mesh
				ref={mesh}
                position={[0,((altura*-1)/2)-0.1,0]}
			>
				<boxGeometry args={[ancho, alturaLosa, longitud]}/>
				<meshBasicMaterial color={'#505459'}/>
			</mesh>
		</>
	)
}

export default Losa
