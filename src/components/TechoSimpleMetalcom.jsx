import { pow, sqrt } from 'mathjs'
import React, { useState } from 'react'

function TechoSimpleMetalcom({ancho, longitud}) {

  //medidas
  const ladoMayor = (ancho, longitud) =>{
    if (ancho>longitud) {
        return ancho
    }
    return longitud
  }
  const ladoMenor = (ancho, longitud) =>{
    if (ancho<longitud) {
        return ancho
    }
    return longitud
  }
  const handleSelector = (e) => {
    setTipoCercha({checked:e.target.value})
  }

  //definir tamaño cercha
  const menor = ladoMenor(ancho, longitud)
  const mayor = ladoMayor(ancho,longitud)
  const alero = 0.45
  const longitudCuerda = menor
  const razonAltura = 1/4
  const altura = longitudCuerda * razonAltura
  const cantCerchas = Math.ceil(ladoMayor(ancho, longitud)/1.2)
  const diagonal = sqrt((pow(altura,2)+pow(longitudCuerda+alero,2)))
  
  //construir cercha
  const perimetro = longitudCuerda + (alero*2) + diagonal + altura
  const cantPilares = Math.ceil(longitudCuerda/0.6)+1
  const pilares = Math.ceil((cantPilares*altura)/2)
  const canalC = Math.ceil((perimetro + pilares)*cantCerchas)
  const cantOmegas = (Math.ceil(diagonal) + 1)
  const omegas = Math.ceil(cantOmegas * mayor)

  //tornillos
  const lenteja = cantCerchas * 16
  const hexagonal = (((cantPilares * 6) + 12 + (cantOmegas * 2)) * cantCerchas)

  //planchas
  const areaBase = mayor * (menor + alero)
  const areaLado = mayor * diagonal
  const areaTriangulo = ((menor + alero) * altura)/2
  const zinc = Math.ceil((areaLado*1.15)/(0.85*3))
  const fibroCemento = Math.ceil(areaBase/(2.4*1.2))
  
  return (
    <div>
      <h2 className='text-xl'>Materiales necesarios para techo de 1 pendientes:</h2>
      <ul className='pl-6'>
        <li>- Canal Omega: {omegas} unidades</li>
        <li>- Canal C: {canalC} unidades</li>
        <li>- Tornillo Lenteja: {lenteja} unidades</li>
        <li>- Tornillo Hexagonal: {hexagonal} unidades</li>
        <li>- Planchas Zinc: {zinc} unidades</li>
        <li>- Planchas Fibro Cemento: {fibroCemento} unidades</li>
      </ul>
    </div>
  )
}

export default TechoSimpleMetalcom
