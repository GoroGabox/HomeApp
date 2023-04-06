import React, { useState } from 'react';
import {
  maderaIcon,
  tableroIcon,
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
      <div className="flex justify-between items-center mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Muros de madera:</h2>
        <div className="text-3xl">
            {show?'-':'+'}
        </div>
      </div>
      {show&&
      
      <>
          <div className="flex flex-col mb-8">
            <p className='text-sm text-gray-700'>Razon:1/2/3</p>
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
                <td className="flex justify-center md:w-fit"><img src={maderaIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Palo 2x2</td>
                <td className="text-center">{cantVert}</td>
                <td className="text-center">3m</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={maderaIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Palo 2x4</td>
                <td className="text-center">{cantHorz}</td>
                <td className="text-center">3m</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={tableroIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">OSB</td>
                <td className="text-center">{osb}</td>
                <td className="text-center">unidades</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={tableroIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Fibrocemento</td>
                <td className="text-center">{fibroCemento}</td>
                <td className="text-center">unidades</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={tornilloIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Clavos 4'</td>
                <td className="text-center">{clavo}</td>
                <td className="text-center">unidades</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={tornilloIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">T. Fijacion</td>
                <td className="text-center">{fijacion}</td>
                <td className="text-center">unidades</td>
              </tr>
            </tbody>
          </table>
        </>
      }
    </div>
  );
}

export default MuroMadera;