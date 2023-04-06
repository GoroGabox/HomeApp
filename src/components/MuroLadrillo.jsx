import React, {useState} from 'react'
import {  
  aceroIcon,
  aguaIcon,
  arenaIcon,
  cementoIcon,
  piedraIcon,
  ladrilloIcon
} from '../assets/icons'

function MuroLadrillo({ancho, longitud, altura}) {

  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className='text-xl'>Muros de ladrillo:</h2>
        <div className="text-3xl">
          {show?'-':'+'}
        </div>
      </div>
      {show&&
        <>
          <div className="flex flex-col mb-8">
            <p className='text-sm text-gray-700'>Razon:1/0/2</p>
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
                <td className="flex justify-center md:w-fit"><img src={aguaIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Agua</td>
                <td className="text-center">{}</td>
                <td className="text-center">litros</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={cementoIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Cemento</td>
                <td className="text-center">{}</td>
                <td className="text-center">kg</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={arenaIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Arena</td>
                <td className="text-center">{}</td>
                <td className="text-center">m³</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={piedraIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Grava</td>
                <td className="text-center">{}</td>
                <td className="text-center">m³</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={ladrilloIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Ladrillos</td>
                <td className="text-center">{}</td>
                <td className="text-center">unidades</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={aceroIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Acero</td>
                <td className="text-center">{}</td>
                <td className="text-center">varillas</td>
              </tr>
            </tbody>
          </table>
        </>
      }
    </div>
  );
}

export default MuroLadrillo
