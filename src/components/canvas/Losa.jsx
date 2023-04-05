import React, { useRef } from "react"
import { lightConcreteTexture } from "../../assets/images/textures"

function Losa({ancho, longitud, altura}) {
    const mesh = useRef()
    const alturaLosa = 0.2
	const grow = 1+.1
	return (
		<>
			<mesh
				ref={mesh}
                position={[0,((altura*-1)/2)-0.1,0]}
			>
				<boxGeometry args={[ancho*(grow-grow/15), alturaLosa, longitud*(grow-grow/15)]}/>
				<meshBasicMaterial color={'#949494'} map={lightConcreteTexture}/>
			</mesh>
		</>
	)
}

export default Losa
