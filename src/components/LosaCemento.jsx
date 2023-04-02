import React, { useState } from "react";

function LosaCemento({ ancho, longitud }) {

  const [show, setShow] = useState(false);

  // Cálculo del volumen de la losa en m³
  const volumen = ancho * longitud * 0.15;

  // Cálculo de la cantidad de materiales necesarios
  const cemento = 0.1 * volumen * 1000; // 1 kg de cemento por cada m³ de concreto
  const agua = 0.5 * volumen * 1000; // 0.5 litros de agua por kg de cemento
  const arena = 0.34 * volumen; // Proporción de mezcla de 1:2:3
  const grava = 0.5 * volumen; // Proporción de mezcla de 1:2:3
  const acero = Math.ceil((ancho * longitud) / (0.15 * 0.1)); // Una varilla de 0.1 de diametro de acero cada 15 cm

  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className="text-xl">Losa de cemento:</h2>
        <div className="hover:cursor-pointer" onClick={(e) => setShow(!show)}>
          {show?'-':'+'}
        </div>
      </div>
      {show && (
        <ul className="grid grid-cols-4 gap-1">
          <li className="text-center bg-sky-900">icon</li>
          <li className="text-center bg-sky-900">Agua</li>
          <li className="text-center bg-sky-900">{agua.toFixed(2)}</li>
          <li className="text-center bg-sky-900">litros</li>
          <li className="text-center bg-sky-900">icon</li>
          <li className="text-center bg-sky-900">Arena</li>
          <li className="text-center bg-sky-900">{arena.toFixed(2)}</li>
          <li className="text-center bg-sky-900">m³</li>
          <li className="text-center bg-sky-900">icon</li>
          <li className="text-center bg-sky-900">Grava</li>
          <li className="text-center bg-sky-900">{grava.toFixed(2)}</li>
          <li className="text-center bg-sky-900">m³</li>
          <li className="text-center bg-sky-900">icon</li>
          <li className="text-center bg-sky-900">Cemento</li>
          <li className="text-center bg-sky-900">{cemento.toFixed(2)}</li>
          <li className="text-center bg-sky-900">kg</li>
          <li className="text-center bg-sky-900">icon</li>
          <li className="text-center bg-sky-900">Acero</li>
          <li className="text-center bg-sky-900">{acero}</li>
          <li className="text-center bg-sky-900">varillas</li>
        </ul>
      )}
    </div>
  );
}

export default LosaCemento;
