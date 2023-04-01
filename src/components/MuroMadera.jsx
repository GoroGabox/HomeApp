import { pow, sqrt } from 'mathjs';
import React from 'react';

function MuroMadera({ancho, longitud, altura}) {

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
      <h2 className='text-xl'>Materiales necesarios para muros de madera:</h2>
      <ul className='pl-6'>
        <li>- Palo seco 2x2: {cantVert} de 3m</li>
        <li>- Palo seco 2x4: {cantHorz} de 3m</li>
        <li>- Panel OSB: {osb} unidades</li>
        <li>- Panel fibrocemento: {fibroCemento} unidades</li>
        <li>- Clavos 4': {clavo} unidades</li>
        <li>- Tornillo fijacion: {fijacion} unidades</li>
      </ul>
    </div>
  );
}

export default MuroMadera;