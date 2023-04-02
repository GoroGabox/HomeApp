import { pow, sqrt } from 'mathjs';
import React, { useState } from 'react';
import {
  aceroIcon,
  aguaIcon,
  amiantoIcon,
  arenaIcon,
  canalCIcon,
  canalUIcon,
  cementoIcon,
  columnaIcon,
  concretoIcon,
  hormigonIcon,
  maderaIcon,
  mallaIcon,
  piedraIcon,
  tableroIcon,
  techoIcon,
  tornilloIcon
} from '../assets/icons'

function MuroMadera({ancho, longitud, altura}) {

  const [show, setShow] = useState(false);

  // Cálculo del area de los muros
  const area = ancho * altura * 2 + longitud * altura * 2;
  const perimetro = 2 * (ancho + longitud)

  // Cálculo de la cantidad de vigas
  const cantPvert = ((Math.ceil((ancho/0.6)+1) + Math.ceil((longitud/0.6)+1)) * 2)
  const cantPhorz = Math.ceil((altura/0.6)+1)
  const medidaVert = cantPvert * altura
  const medidaHorz = ((cantPhorz * ancho) + (cantPhorz * longitud)) * 2
  const cantVert = Math.ceil(medidaVert/3)
  const cantHorz = Math.ceil(medidaHorz/3)

  const viga = perimetro * 2

  //Calculo cantidad de paneles
  const osb = Math.ceil(area/(2.4 * 1.2))
  const fibroCemento = Math.ceil(area/(2.4 * 1.2))

  //Calculo de cantidad de clavos
  const clavo = Math.ceil((cantVert * 4) + ((perimetro/0.6) * 4 * cantPhorz) + Math.ceil((altura/0.4)*4))
  const fijacion = osb * 21


  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className='text-xl'>Muros de madera:</h2>
        <div className="hover:cursor-pointer" onClick={(e) => setShow(!show)}>
            {show?'-':'+'}
        </div>
      </div>
      {show&&
      
      <ul className='grid grid-cols-4 gap-1'>
        <li className="text-center bg-sky-900 flex justify-center">
            <img src={tableroIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center bg-sky-900'>Palo seco 2x2</li>
        <li className='text-center bg-sky-900'>{cantVert}</li>
        <li className='text-center bg-sky-900'>3m</li>
        <li className="text-center bg-sky-900 flex justify-center">
            <img src={tableroIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center bg-sky-900'>Palo seco 2x4</li>
        <li className='text-center bg-sky-900'>{cantHorz}</li>
        <li className='text-center bg-sky-900'>3m</li>
        <li className="text-center bg-sky-900 flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center bg-sky-900'>Panel OSB</li>
        <li className='text-center bg-sky-900'>{osb}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className="text-center bg-sky-900 flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center bg-sky-900'>Panel fibrocemento</li>
        <li className='text-center bg-sky-900'>{fibroCemento}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className="text-center bg-sky-900 flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center bg-sky-900'>Clavos 4</li>
        <li className='text-center bg-sky-900'>{clavo}</li>
        <li className='text-center bg-sky-900'>unidades</li>
        <li className="text-center bg-sky-900 flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center bg-sky-900'>Tornillo fijacion</li>
        <li className='text-center bg-sky-900'>{fijacion}</li>
        <li className='text-center bg-sky-900'>unidades</li>
      </ul>
      }
    </div>
  );
}

export default MuroMadera;