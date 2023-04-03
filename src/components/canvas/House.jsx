import React, { useMemo } from "react"
import Losa from "./Losa"
import Muros from "./Muros"
import Cercha from "./Cercha"

const House = ({ancho, longitud, altura}) => {
	const numCerchas = (Math.floor(longitud))/2;

	const cerchas = useMemo(() => {
        const result = [];
        for (let i = -numCerchas; i <= numCerchas; i++) {
            const ubicacion = i;
            result.push(<Cercha ancho={ancho} ubicacion={ubicacion} altura={altura} key={i}/>);
        }
        return result;
    }, [ancho, longitud, altura, numCerchas]);

	return (
		<>	
			{cerchas}
			<Muros ancho={ancho} longitud={longitud} altura={altura}/>
			<Losa ancho={ancho} longitud={longitud} altura={altura}/>
		</>
	)
}

export default House