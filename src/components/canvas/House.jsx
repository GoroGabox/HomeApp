import React, { useMemo, useContext } from "react"
import Losa from "./Losa"
import Muros from "./Muros"
import {CerchaSimple, CerchaDoble} from "./Cercha"
import { woodTexture, zincTexture } from "../../assets/images/textures"
import CalculatorContext  from "../../context/CalculatorContext";

const House = ({ancho, longitud, altura}) => {

	let {material, techo} = useContext(CalculatorContext)

	let textura
	if (material==='opcion1') {textura=zincTexture}
	if (material==='opcion2') {textura=woodTexture}

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
            result.push(<CerchaSimple ancho={ancho} ubicacion={ubicacion} altura={altura} key={i} ladoMenor={ladoMenor}/>);
        }
        return result;
    }, [ancho, longitud, altura, numCerchas]);

	const cerchasDobles = useMemo(() => {
        const result = [];
        for (let i = -numCerchas; i <= numCerchas; i++) {
            const ubicacion = i;
            result.push(<CerchaDoble ancho={ancho} ubicacion={ubicacion} altura={altura} key={i} ladoMenor={ladoMenor}/>);
        }
        return result;
    }, [ancho, longitud, altura, numCerchas]);

	return (
		<>	
			{techo==='opcion1' ? cerchasSimples: cerchasDobles}
			<Muros ancho={ancho} longitud={longitud} altura={altura} textura={textura}/>
			<Losa ancho={ancho} longitud={longitud} altura={altura}/>
		</>
	)
}

export default House