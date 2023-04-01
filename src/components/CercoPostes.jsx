import React from 'react';

function CercoPostes({ancho, longitud, altura}) {

  const postSpacing = 2;
  const lineSpacing = 0.5;
  const numPosts = Math.ceil((2 * ancho + 2 * longitud) / postSpacing);
  const numLines = Math.ceil(altura / lineSpacing);
  const numStrainers = Math.ceil(numLines / 10);
  const postLength = altura + 0.3;
  const totalPostLength = numPosts * postLength;
  const wireLength = 2 * (ancho + longitud) * numLines;
  const numBarbedWire = Math.ceil(wireLength / 50);


  return (
    <div>
      <h2 className='text-xl'>Materiales necesarios para un cerco de postes y alambre de puas:</h2>
      <ul className='pl-6'>
        <li>- Rollizo impregnado de 4'x4': {numPosts} unidades</li>
        <li>- Espacio entre postes: {postSpacing} m</li>
        <li>- Numero de lineas: {numLines} lineas</li>
        <li>- Total alambre: {wireLength} m</li>
      </ul>
    </div>
  );
}

export default CercoPostes;
