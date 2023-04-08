import React, { useMemo, useContext, useEffect } from "react"
import Losa from "./Losa"
import Muros from "./Muros"
import {CerchaSimple, CerchaDoble} from "./Cercha"
import { woodTexture, zincTexture, brickTexture, osbTexture } from "../../assets/images/textures"
import CalculatorContext  from "../../context/CalculatorContext";

const House = ({ancho, longitud, altura}) => {

	let {material, techo} = useContext(CalculatorContext)

	let textura
	if (material==='opcion1') {textura=zincTexture}
	if (material==='opcion2') {textura=woodTexture}
	if (material==='opcion3') {textura=zincTexture}

	let ladoMenor
	let ladoMayor
	if (ancho<=longitud) {
		ladoMenor=ancho
		ladoMayor=longitud
	}
	if (ancho>longitud) {
		ladoMenor=longitud
		ladoMayor=ancho
	}

	const numCerchas = (Math.floor(ladoMayor))/2;

	const cerchasSimples = useMemo(() => {
        const result = [];
        for (let i = -numCerchas; i <= numCerchas; i++) {
            const ubicacion = i;
            result.push(<CerchaSimple ancho={ancho} ubicacion={ubicacion} altura={altura} key={i} ladoMenor={ladoMenor} textura={textura}/>);
        }
        return result;
    }, [ancho, longitud, altura, numCerchas, textura]);

	const cerchasDobles = useMemo(() => {
        const result = [];
        for (let i = -numCerchas; i <= numCerchas; i++) {
            const ubicacion = i;
            result.push(<CerchaDoble ancho={ancho} ubicacion={ubicacion} altura={altura} key={i} ladoMenor={ladoMenor} textura={textura}/>);
        }
        return result;
    }, [ancho, longitud, altura, numCerchas, textura]);

	if (material==='opcion1') {
		return (
			<>	
				{techo==='opcion1' ? cerchasSimples: cerchasDobles}
				<Muros ancho={ancho} longitud={longitud} altura={altura} textura={zincTexture} texturaMuro={osbTexture} isVisible={true}/>
				<Losa ancho={ancho} longitud={longitud} altura={altura}/>
			</>
		)		
	}
	if (material==='opcion2') {
		return (
			<>	
				{techo==='opcion1' ? cerchasSimples: cerchasDobles}
				<Muros ancho={ancho} longitud={longitud} altura={altura} textura={woodTexture} texturaMuro={osbTexture} isVisible={true}/>
				<Losa ancho={ancho} longitud={longitud} altura={altura}/>
			</>
		)		
	}
	if (material==='opcion3') {
		return (
			<>	
				{techo==='opcion1' ? cerchasSimples: cerchasDobles}
				<Muros ancho={ancho} longitud={longitud} altura={altura} textura={zincTexture} texturaMuro={brickTexture} isVisible={false}/>
				<Losa ancho={ancho} longitud={longitud} altura={altura}/>
			</>
		)
	}

}

export default House