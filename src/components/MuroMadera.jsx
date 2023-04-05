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
      <div className="flex justify-between mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Muros de madera:</h2>
        <div>
            {show?'-':'+'}
        </div>
      </div>
      {show&&
      
      <ul className='grid grid-cols-4 gap-1 border-solid border-blue-500 border-2'>
        <li className="text-center flex justify-center">
            <img src={tableroIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Palo seco 2x2</li>
        <li className='text-center'>{cantVert}</li>
        <li className='text-center'>3m</li>
        <li className="text-center flex justify-center">
            <img src={tableroIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Palo seco 2x4</li>
        <li className='text-center'>{cantHorz}</li>
        <li className='text-center'>3m</li>
        <li className="text-center flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Panel OSB</li>
        <li className='text-center'>{osb}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={maderaIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Panel fibrocemento</li>
        <li className='text-center'>{fibroCemento}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Clavos 4</li>
        <li className='text-center'>{clavo}</li>
        <li className='text-center'>unidades</li>
        <li className="text-center flex justify-center">
            <img src={tornilloIcon} alt="icono" className='w-1/4'/>
        </li>
        <li className='text-center'>Tornillo fijacion</li>
        <li className='text-center'>{fijacion}</li>
        <li className='text-center'>unidades</li>
      </ul>
      }
    </div>
  );
}

export default MuroMadera;