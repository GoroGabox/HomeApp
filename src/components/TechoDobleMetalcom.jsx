import { pow, sqrt } from 'mathjs'
import React, { useState } from 'react'
import {
  amiantoIcon,
  canalCIcon,
  maderaIcon,
  techoIcon,
  tornilloIcon
} from '../assets/icons'

function TechoDobleMetalcom({ancho, longitud}) {

  const [show, setShow] = useState(false);

  //medidas
  const ladoMayor = (ancho, longitud) =>{
    if (ancho>longitud) {
        return ancho
    }
    return longitud
  }
  const ladoMenor = (ancho, longitud) =>{
    if (ancho<longitud) {
        return ancho
    }
    return longitud
  }
  const handleSelector = (e) => {
    setTipoCercha({checked:e.target.value})
  }

  //definir tamaño cercha
  const menor = ladoMenor(ancho, longitud)
  const mayor = ladoMayor(ancho,longitud)
  const alero = 0.45
  const longitudCuerda = menor
  const razonAltura = 1/4
  const altura = longitudCuerda * razonAltura
  const cantCerchas = Math.ceil(ladoMayor(ancho, longitud))
  const diagonal = sqrt((pow(altura,2)+pow((longitudCuerda/2)+alero,2)))
  
  //construir cercha
  const perimetro = longitudCuerda + (alero*2) + (diagonal*2)
  const cantPilares = Math.ceil((longitudCuerda/2)/0.6)+1
  const pilares = Math.ceil((cantPilares*altura)/2)
  const canalC = Math.ceil(((perimetro + pilares)*cantCerchas)/6)
  const omegas= (Math.ceil(diagonal/0.6) + 1) * 2
  const cantOmegas = Math.ceil((omegas * mayor)/6)

  //tornillos
  const lenteja = cantCerchas * 16
  const hexagonal = (((cantPilares * 6) + 12 + (cantOmegas * 2)) * cantCerchas)

  //planchas
  const areaBase = mayor * (menor + alero)
  const areaLado = mayor * diagonal
  const areaTriangulo = ((menor + alero) * altura)/2
  const zinc = Math.ceil(((areaLado*2)*1.15)/(0.85*3))
  const fibroCemento = Math.ceil(areaBase/(2.4*1.2))
  
  return (
    <div>
      <div className="flex justify-between items-center mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Techo de 2 pendientes:</h2>
        <div className="text-3xl">
              {show?'-':'+'}
        </div>
      </div>
      {show&&
        <>
        <div className="flex flex-col mb-8">
          <p className='text-sm text-gray-700'>Cantidad de cerchas: {cantCerchas} unidades</p>
          <p className='text-sm text-gray-700'>Altura cercha: {altura} m</p>
        </div>
        <table className="table-auto border-solid border-blue-500 border-2 mx-auto w-full mb-10">
          <thead>
            <tr>
              <th className="text-center w-1/4">Icono</th>
              <th className="text-center">Material</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Unidad</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit"><img src={canalCIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
              <td className="text-center">Canal C</td>
              <td className="text-center">{canalC}</td>
              <td className="text-center">6m</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit"><img src={techoIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
              <td className="text-center">Canal Omega</td>
              <td className="text-center">{cantOmegas}</td>
              <td className="text-center">6m</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit"><img src={tornilloIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
              <td className="text-center">T. Lenteja</td>
              <td className="text-center">{lenteja.toFixed(0)}</td>
              <td className="text-center">unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit"><img src={tornilloIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
              <td className="text-center">T. Hexagonal</td>
              <td className="text-center">{hexagonal.toFixed(0)}</td>
              <td className="text-center">unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit"><img src={amiantoIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
              <td className="text-center">Acero galv.</td>
              <td className="text-center">{zinc}</td>
              <td className="text-center">unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit"><img src={maderaIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
              <td className="text-center">Fibrocemento</td>
              <td className="text-center">{fibroCemento}</td>
              <td className="text-center">unidades</td>
            </tr>
          </tbody>
        </table>
      </>
      }
    </div>
  )
}

export default TechoDobleMetalcom
