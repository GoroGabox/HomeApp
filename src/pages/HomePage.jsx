import React from 'react'
import { SketchsCanvas } from '../components/canvas'
import { Link } from 'react-router-dom'
import { Footer } from '../components'

function HomePage() {
  return (
    <>
      <div className='text-white bg-secondaryLight h-screen'>
        <div className="w-[80%] mx-auto">
          <div className="flex w-full h-96 flex-col md:flex-row">
            <div className="flex flex-col justify-center mt-5">
              <h1 className="text-3xl">Construye la casa de tus sueños</h1>
              <h2 className="">Calcula los materiales necesarios para construir tu casa en cuestión de minutos</h2>
            </div>
            <SketchsCanvas/>
          </div>
          <Link to='/calculator' className='text-center rounded-full bg-tertiary px-4 py-2'>Calcula Ahora!</Link>
        </div>
      </div>
      <div className="mt-10">
        <h2 className='mb-5'>Servicios</h2>
        <ul className="grid grid-cols-2">
          <li>Cálculo de materiales de construcción: Con solo ingresar las dimensiones de la casa, nuestra aplicación te proporcionará una lista completa de materiales de construcción necesarios para completar el proyecto. Esta función te ahorrará tiempo y dinero, ya que podrás tener una idea clara de los materiales que necesitas antes de comenzar la construcción. </li>
          <li></li>
          <li></li>
          <li>Modelo 3D de la casa: Nuestra aplicación te proporcionará un modelo en 3D de la casa que estás construyendo, para que puedas visualizar cómo se verá el proyecto terminado. Esto te permitirá tener una mejor comprensión del proyecto y hacer ajustes si es necesario antes de comenzar la construcción.</li>
          <li>Guía de construcción: Ofrecemos una guía completa de construcción que incluye instrucciones detalladas y consejos útiles para ayudarte a construir tu casa de manera efectiva y segura. La guía te guiará a través de cada paso del proceso de construcción y te proporcionará la información que necesitas para evitar errores costosos.</li>
          <li></li>
          <li></li>
          <li>Descarga de la lista de materiales: Para que puedas llevarla contigo cuando compres los materiales en la tienda. Esto te ahorrará tiempo y te ayudará a asegurarte de que tienes todos los materiales que necesitas para completar tu proyecto.</li>
        </ul>
      </div>
      <div className="mt-10">
        <h2 className='mb-5'>¿Buscas construir tu propia casa pero no sabes por dónde empezar? </h2>
        <ul className="grid grid-cols-2">
          <li>¡No te preocupes! Con nuestra aplicación web, podrás calcular los materiales necesarios para construir la casa de tus sueños en cuestión de minutos. No importa si eres un experto en construcción o un principiante, nuestra herramienta es fácil de usar y te ayudará a ahorrar tiempo y dinero en tu proyecto de construcción. </li>
          <li>No importa si eres un experto en construcción o un principiante, nuestra herramienta es fácil de usar y te ayudará a ahorrar tiempo y dinero en tu proyecto de construcción.</li>
        </ul>
      </div>
      <div className="mt-10">
        <h2 className='mb-5'>Planes</h2>
        <ul className="grid grid-cols-3">
          <li>
            <div className="">Plan Gratis</div>
            <div className="">$0</div>
            <div className="">-</div>
            <Link to='/register' className='text-center rounded-full bg-tertiary px-4 py-2'>Empieza Ahora!</Link>
            <button></button>
          </li>
          <li>
            <div className="">Plan Basico</div>
            <div className="">$15</div>
            <div className="">al mes</div>
            <Link to='/register' className='text-center rounded-full bg-tertiary px-4 py-2'>Empieza Ahora!</Link>
          </li>
          <li>
            <div className="">Plan Premium</div>
            <div className="">$150</div>
            <div className="">al año</div>
            <Link to='/register' className='text-center rounded-full bg-tertiary px-4 py-2'>Empieza Ahora!</Link>
          </li>
        </ul>
      </div>
      <Footer/>
    </>
  )
}

export default HomePage
