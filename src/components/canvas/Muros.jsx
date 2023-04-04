import React, { useRef, useMemo } from "react"
import { woodTexture } from "../../assets/images/textures"

function Muros({ancho, longitud, altura}) {
    const mesh = useRef()
	const grosor = 0.1

	return (
		<group>
			<mesh 
			position={[(-ancho/2)+grosor/2, 0, 0]}
			scale={[grosor,altura,longitud]}
			>
				<meshBasicMaterial color="red" wireframe={true}/>
				<boxGeometry args={[1, 1, 1]} />
				<Muro longitud={longitud} altura={altura} />
			</mesh>
			<mesh 
			position={[(ancho/2)-grosor/2, 0, 0]}
			scale={[grosor,altura,longitud]}
			>
				<meshBasicMaterial color="blue" wireframe={true}/>
				<boxGeometry args={[1, 1, 1]} />
				<Muro longitud={longitud} altura={altura} />
			</mesh>
			<mesh 
			position={[0, 0, (longitud/2)-grosor/2]}
			scale={[ancho,altura,grosor]}
			>
				<meshBasicMaterial color="orange" wireframe={true}/>
				<boxGeometry args={[1, 1, 1]} />
			</mesh>
			<mesh 
			position={[0, 0, (-longitud/2)+grosor/2]}
			scale={[ancho,altura,grosor]}
			>
				<meshBasicMaterial color="purple" wireframe={true}/>
				<boxGeometry args={[1, 1, 1]} />
			</mesh>
		</group>
	)
}

export default Muros

export function Muro({longitud, altura}) {
	function mapLengthToRange(l, rangeMin, rangeMax) {
		const lengthMin = 0;
		const lengthMax = 100;
		const length = (l - lengthMin) / (lengthMax - lengthMin);
		const range = (rangeMax - rangeMin) * length + rangeMin;
		return range;
	}

	const numPilares = Math.floor((longitud/0.6)+1);
	const porcentajeEspacio = 100/(longitud/0.6)
	
	const pilares = useMemo(() => {
		const result = [];
		let length = 0;
        for (let i = 0; i < numPilares; i++) {
			const range = mapLengthToRange(length, -0.5, 0.5);
			length += porcentajeEspacio
            result.push(<Pilar ubicacion={range} altura={altura} key={i}/>);
        }
        return result;
    }, [longitud, altura, numPilares]);

	return (
		<>
		{pilares}
		</>
	)
}

export function Pilar({ubicacion, altura}) {

	return (
		<>
			<mesh
			position={[ 0, 0,ubicacion]}
			scale={[1,1,0.01]}
			>
				<boxGeometry args={[1, 1, 1]}/>
				<meshBasicMaterial map={woodTexture}/>
			</mesh>
		</>
	)
}
