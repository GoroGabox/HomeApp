import { pow, sqrt } from 'mathjs';
import React from 'react';

function MuroMetalcom({ancho, longitud, altura}) {

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
      <h2 className='text-xl'>Materiales necesarios para muros de metalcom:</h2>
      <ul className='pl-6'>
        <li>- Canal U: {cantCanalU.toFixed(2)} de 6m</li>
        <li>- Canal C: {cantCanalC.toFixed(2)} de 6m</li>
        <li>- Panel OSB: {osb} unidades</li>
        <li>- Panel fibrocemento: {fibroCemento} unidades</li>
        <li>- Tornillo Lenteja: {lenteja} unidades</li>
        <li>- Tornillo Hexagonal: {hexagonal} unidades</li>
        <li>- Tensor: {tensor} rollo de 60m</li>
      </ul>
    </div>
  );
}

export default MuroMetalcom;