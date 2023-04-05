import React, { useState } from "react";
import {  
  aceroIcon,
  aguaIcon,
  arenaIcon,
  cementoIcon,
  piedraIcon,
} from '../assets/icons'

function LosaCemento({ ancho, longitud }) {

  const [show, setShow] = useState(false);

  // Cálculo del volumen de la losa en m³
  const volumen = ancho * longitud * 0.15;

  // Cálculo de la cantidad de materiales necesarios
  const cemento = 0.1 * volumen * 1000; // 1 kg de cemento por cada m³ de concreto
  const agua = 0.16 * volumen * 1000; // 0.5 litros de agua por kg de cemento
  const arena = 0.34 * volumen; // Proporción de mezcla de 1:2:3
  const grava = 0.5 * volumen; // Proporción de mezcla de 1:2:3
  const acero = Math.ceil((ancho * longitud) / (0.15 * 0.1)); // Una varilla de 0.1 de diametro de acero cada 15 cm

  return (
    <div>
      <div className="flex justify-between items-center mb-3 hover:cursor-pointer bg-[#dbdbdb] p-3" onClick={(e) => setShow(!show)}>
        <h2 className="text-xl">Losa de cemento:</h2>
        <div className="text-3xl">
          {show?'-':'+'}
        </div>
      </div>
      {show && (
        <>
          <div className="flex flex-col mb-8">
            <p className='text-sm text-gray-700'>Razon:1/2/3</p>
            <p className='text-sm text-gray-700'>Area:{ancho*longitud} m2</p>
            <p className='text-sm text-gray-700'>Altura:15 cm</p>
            <p className='text-sm text-gray-700'>Volumen:{volumen} m³</p>
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
                <td className="text-center">{agua.toFixed(2)}</td>
                <td className="text-center">litros</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={cementoIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Cemento</td>
                <td className="text-center">{cemento.toFixed(2)}</td>
                <td className="text-center">kg</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={arenaIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Arena</td>
                <td className="text-center">{arena.toFixed(2)}</td>
                <td className="text-center">m³</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={piedraIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Grava</td>
                <td className="text-center">{grava.toFixed(2)}</td>
                <td className="text-center">m³</td>
              </tr>
              <tr className="border-solid border-blue-500 border-2 border-collapse">
                <td className="flex justify-center md:w-fit"><img src={aceroIcon} alt="icono" className='w-1/4 md:w-1/12'/></td>
                <td className="text-center">Acero</td>
                <td className="text-center">{acero}</td>
                <td className="text-center">varillas</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default LosaCemento;
