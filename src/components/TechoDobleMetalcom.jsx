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
  const cantCerchas = Math.ceil(ladoMayor(ancho, longitud)/1.2)
  const diagonal = sqrt((pow(altura,2)+pow((longitudCuerda/2)+alero,2)))
  
  //construir cercha
  const perimetro = longitudCuerda + (alero*2) + (diagonal*2)
  const cantPilares = Math.ceil(longitudCuerda/0.6)+1
  const pilares = Math.ceil(cantPilares/2)*altura
  const canalC = Math.ceil((perimetro + pilares)*cantCerchas)
  const cantOmegas = (Math.ceil(diagonal) + 1) * 2
  const omegas = Math.ceil(cantOmegas * mayor)

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
      <div className="flex justify-between mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Techo de 2 pendientes:</h2>
        <div>
              {show?'-':'+'}
        </div>
      </div>
      {show&&
      <ul className='grid grid-cols-4 gap-1 border-solid border-blue-500 border-2'>
        <li className="text-center flex justify-center">
            <img src={techoIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Canal Omega</li>
        <li className='text-center'>{omegas}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={canalCIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Canal C</li>
        <li className='text-center'>{canalC}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Tornillo Lenteja</li>
        <li className='text-center'>{lenteja}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Tornillo Hexagonal</li>
        <li className='text-center'>{hexagonal}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={amiantoIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Planchas Zinc</li>
        <li className='text-center'>{zinc}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Planchas Fibro Cemento</li>
        <li className='text-center'>{fibroCemento}</li>
        <li className='text-center'>unidades</li>
      </ul>
      }
    </div>
  )
}

export default TechoDobleMetalcom
