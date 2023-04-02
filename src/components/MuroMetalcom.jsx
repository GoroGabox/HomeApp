import { pow, sqrt } from 'mathjs';
import React, { useState } from 'react';

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
      <div className="flex justify-between mb-3">
        <h2 className='text-xl'>Muros de metalcom:</h2>
        <div className="hover:cursor-pointer" onClick={(e) => setShow(!show)}>
          {show?'-':'+'}
        </div>
      </div>
      {show&&
      
      <ul className='grid grid-cols-4 gap-1'>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-center bg-sky-900'>Canal U</li>
        <li className='text-center bg-sky-900'>{cantCanalU.toFixed(2)}</li>
        <li className='text-center bg-sky-900'>6m</li>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-center bg-sky-900'>Canal C</li>
        <li className='text-center bg-sky-900'>{cantCanalC.toFixed(2)}</li>
        <li className='text-center bg-sky-900'>6m</li>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-sm text-center bg-sky-900'>Panel OSB</li>
        <li className='text-center bg-sky-900'>{osb}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-sm text-center bg-sky-900'>Panel fibrocemento</li>
        <li className='text-center bg-sky-900'>{fibroCemento}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-sm text-center bg-sky-900'>Tornillo Lenteja</li>
        <li className='text-center bg-sky-900'>{lenteja}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-sm text-center bg-sky-900'>Tornillo Hexagonal</li>
        <li className='text-center bg-sky-900'>{hexagonal}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className='text-center bg-sky-900'>Icon</li>
        <li className='text-center bg-sky-900'>Tensor</li>
        <li className='text-center bg-sky-900'>{tensor}</li>
        <li className='text-center bg-sky-900'>60m</li>
      </ul>
      }
    </div>
  );
}

export default MuroMetalcom;