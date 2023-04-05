import React, {useContext} from 'react'
import CalculatorContext  from "../context/CalculatorContext";
import {
    LosaCemento,
    MuroMetalcom,
    MuroMadera,
    TechoDobleMetalcom,
    TechoSimpleMetalcom,
  } from "../components";

function ListPage() {

    let {xRange,yRange,zRange, irModelo, irGuia} = useContext(CalculatorContext)

  return (
    <div className='flex flex-col justify-between min-h-[90vh] p-5'>
        <h2 className='text-xl'>MATERIALES DE CONSTRUCCION</h2>
        <p className='text-sm text-gray-700 mb-10'>(Materiales calculados a partir de las medidas dadas en la pagina anterior.)</p>
        <LosaCemento ancho={xRange} longitud={yRange}/>
        <hr/>
        <MuroMetalcom ancho={xRange} longitud={yRange} altura={zRange}/>
        <hr/>
        <MuroMadera ancho={xRange} longitud={yRange} altura={zRange}/>
        <hr/>
        <TechoDobleMetalcom ancho={xRange} longitud={yRange}/>
        <hr/>
        <TechoSimpleMetalcom ancho={xRange} longitud={yRange}/>
        <hr/>
        <div onClick={irGuia} className="bg-tertiary px-5 py-3 text-white font-bold text-center text-xl mt-5 mb-2">Guía</div>
        <div onClick={irModelo} className="text-tertiary px-5 py-3 font-bold text-center text-xl border-solid border-2 border-tertiary">Volver</div>
    </div>
  )
}

export default ListPage
