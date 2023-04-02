import React, { useRef } from "react"
import { woodTexture } from "../../assets/images/textures"

function Muros({ancho, longitud, altura}) {
    const mesh = useRef()

	return (
		<>
			<mesh
				ref={mesh}
			>
				<boxGeometry args={[ancho, altura, longitud]}/>
				<meshBasicMaterial map={woodTexture}/>
			</mesh>
		</>
	)
}

export default Muros
