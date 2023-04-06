import React, {useContext} from 'react'
import CalculatorContext  from "../context/CalculatorContext";
import {
    LosaCemento,
    MuroMetalcom,
    MuroMadera,
    MuroLadrillo,
    TechoDobleMetalcom,
    TechoSimpleMetalcom,
  } from "../components";

function ListPage() {

    let {ancho,longitud,altura, irModelo, irGuia, material, techo} = useContext(CalculatorContext)

  return (
    <div className='flex flex-col justify-between min-h-[90vh] p-5 mt-20'>
        <h2 className='text-xl'>MATERIALES DE CONSTRUCCION</h2>
        <p className='text-sm text-gray-700 mb-10'>(Materiales calculados a partir de las medidas dadas en la pagina anterior.)</p>
        <LosaCemento ancho={ancho} longitud={longitud}/>
        <hr/>
        {material==='opcion1'?
          <MuroMetalcom ancho={ancho} longitud={longitud} altura={altura}/>
          :
          material==='opcion2'?
            <MuroMadera ancho={ancho} longitud={longitud} altura={altura}/> 
            :
            <MuroLadrillo ancho={ancho} longitud={longitud} altura={altura}/> 
        }
        <hr/>
          {techo==='opcion1'?
            <TechoSimpleMetalcom ancho={ancho} longitud={longitud}/>
            :
            <TechoDobleMetalcom ancho={ancho} longitud={longitud}/>
          }
        <hr/>
        <div className="flex">
          <div  className="bg-red-600 px-5 py-3 text-white font-bold text-center text-xl w-full">PDF</div>
          <div  className="bg-green-600 px-5 py-3 text-white font-bold text-center text-xl w-full">Excell</div>
        </div>
        <hr/>
        <div className="flex">
          <div onClick={irGuia} className="bg-tertiary px-5 py-3 text-white font-bold text-center text-xl w-full">Guía</div>
          <div onClick={irModelo} className="text-blue-600 px-5 py-3 font-bold text-center text-xl border-solid border-2 border-blue-600 w-full">Volver</div>
        </div>
    </div>
  )
}

export default ListPage
