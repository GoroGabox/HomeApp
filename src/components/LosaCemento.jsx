import React from 'react';

function LosaCemento({ancho, longitud}) {

  // Cálculo del volumen de la losa en m³
  const volumen = ancho * longitud * 0.15;

  // Cálculo de la cantidad de materiales necesarios
  const cemento = 0.1 * volumen * 1000; // 1 kg de cemento por cada m³ de concreto
  const agua = 0.5 * volumen * 1000; // 0.5 litros de agua por kg de cemento
  const arena = 0.34 * volumen; // Proporción de mezcla de 1:2:3
  const grava = 0.50 * volumen; // Proporción de mezcla de 1:2:3
  const acero = Math.ceil((ancho * longitud) / (0.15 * 0.1)); // Una malla de acero cada 15 cm

  return (
    <div>
      <h2 className='text-xl'>Materiales necesarios para la losa de cemento:</h2>
      <ul className='pl-6'>
        <li>- Agua: {agua.toFixed(2)} litros</li>
        <li>- Arena: {arena.toFixed(2)} m³</li>
        <li>- Grava: {grava.toFixed(2)} m³</li>
        <li>- Cemento: {cemento.toFixed(2)} kg</li>
        <li>- Acero: {acero} varillas de 15 mm de diametro</li>
      </ul>
    </div>
  );
}

export default LosaCemento;
