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
      <div className="flex justify-between items-center mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Muros de metalcom:</h2>
        <div className="text-3xl">
          {show?'-':'+'}
        </div>
      </div>
      {show&&
        <table className='table-auto border-solid border-blue-500 border-2 mx-auto w-full mb-10'>
          <thead>
            <tr>
              <th className="text-center w-1/4"></th>
              <th className='text-center'>Producto</th>
              <th className='text-center'>Cantidad</th>
              <th className='text-center'>Unidad</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={canalUIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-center'>Canal U</td>
              <td className='text-center'>{cantCanalU.toFixed(2)}</td>
              <td className='text-center'>6m</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={canalCIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-center'>Canal C</td>
              <td className='text-center'>{cantCanalC.toFixed(2)}</td>
              <td className='text-center'>6m</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={maderaIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-sm text-center'>OSB</td>
              <td className='text-center'>{osb}</td>
              <td className='text-center'>unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={maderaIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-sm text-center'>Fibrocemento</td>
              <td className='text-center'>{fibroCemento}</td>
              <td className='text-center'>unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={tornilloIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-sm text-center'>T. Lenteja</td>
              <td className='text-center'>{lenteja}</td>
              <td className='text-center'>unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={tornilloIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-sm text-center'>T. Hexagonal</td>
              <td className='text-center'>{hexagonal}</td>
              <td className='text-center'>unidades</td>
            </tr>
            <tr className="border-solid border-blue-500 border-2 border-collapse">
              <td className="flex justify-center md:w-fit">
                <img src={aceroIcon} alt="icono" className='w-1/4 md:w-1/12'/>
              </td>
              <td className='text-center'>Tensor</td>
              <td className='text-center'>{tensor}</td>
              <td className='text-center'>60m</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  )
};

export default MuroMetalcom;