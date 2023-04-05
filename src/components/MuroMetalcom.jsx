import { pow, sqrt } from 'mathjs';
import React, { useState } from 'react';
import {
  aceroIcon,
  canalCIcon,
  canalUIcon,
  maderaIcon,
  tornilloIcon
} from '../assets/icons'

function MuroMetalcom({ancho, longitud, altura}) {

  const [show, setShow] = useState(false);

  // Cálculo del area de los muros
  const area = ancho * altura * 2 + longitud * altura * 2;
  const perimetro = 2 * (ancho + longitud)

  // Cálculo de la cantidad de vigas
  const canalU = perimetro * 3 //cantidad en metros
  const cantCanalU = canalU/6
  const canalC = (2 * ((ancho/0.6) + 3) +  ((longitud/0.6) + 3) * altura) + perimetro //cantidad en metros
  const cantCanalC = canalC/6

  //Calculo cantidad de paneles
  const osb = Math.ceil(area/(2.4 * 1.2))
  const fibroCemento = Math.ceil(area/(2.4 * 1.2))

  //Calculo de cantidad de tornillos
  const lenteja = Math.ceil((4 * cantCanalC) + ((perimetro/0.4) * 2) + (9*4*4))
  const hexagonal = Math.ceil((altura/0.4)*4)

  //Calculo de cantidad de tensadores
  const diagonal = sqrt(pow(ancho, 2) + pow(altura,2))
  const tensor = Math.ceil((8 * diagonal)/60)

  return (
    <div>
      <div className="flex justify-between mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Muros de metalcom:</h2>
        <div>
          {show?'-':'+'}
        </div>
      </div>
      {show&&
      
      <ul className='grid grid-cols-4 gap-1 border-solid border-blue-500 border-2'>
        <li className="text-center flex justify-center">
            <img src={canalUIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Canal U</li>
        <li className='text-center'>{cantCanalU.toFixed(2)}</li>
        <li className='text-center'>6m</li>
        <li className="text-center flex justify-center">
            <img src={canalCIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Canal C</li>
        <li className='text-center'>{cantCanalC.toFixed(2)}</li>
        <li className='text-center'>6m</li>
        <li className="text-center flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-sm text-center'>Panel OSB</li>
        <li className='text-center'>{osb}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-sm text-center'>Panel fibrocemento</li>
        <li className='text-center'>{fibroCemento}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-sm text-center'>Tornillo Lenteja</li>
        <li className='text-center'>{lenteja}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-sm text-center'>Tornillo Hexagonal</li>
        <li className='text-center'>{hexagonal}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={aceroIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Tensor</li>
        <li className='text-center'>{tensor}</li>
        <li className='text-center'>60m</li>
      </ul>
      }
    </div>
  );
}

export default MuroMetalcom;