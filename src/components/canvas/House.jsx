import React from "react"
import Losa from "./Losa"
import Muros from "./Muros"
import Cercha from "./Cercha"

const House = ({ancho, longitud, altura}) => {
	
	return (
		<>	
			<Cercha ancho={ancho} longitud={longitud} altura={altura}/>
			<Muros ancho={ancho} longitud={longitud} altura={altura}/>
			<Losa ancho={ancho} longitud={longitud} altura={altura}/>
		</>
	)
}

export default House