import React from 'react'
import { SketchsCanvas } from '../components/canvas'
import { Link } from 'react-router-dom'
import { Footer } from '../components'

function HomePage() {
  return (
    <>
      <div className='text-white bg-secondaryLight h-[90vh]'>
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
      <div className="mt-10 flex flex-col  items-center">
        <h2 className='mb-5 w-full text-center text-3xl my-10'>Servicios</h2>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 w-[80%] mt-10">
          <li>
            <strong>Cálculo de materiales de construcción:</strong>
            <div className="">Con solo ingresar las dimensiones de la casa, nuestra aplicación te proporcionará una lista completa de materiales de construcción necesarios para completar el proyecto. Esta función te ahorrará tiempo y dinero, ya que podrás tener una idea clara de los materiales que necesitas antes de comenzar la construcción. </div>
          </li>
          <li>
            <strong>Modelo 3D de la casa:</strong>
            <div className="">Un modelo en 3D de tu proyecto, para que puedas visualizar cómo se verá terminado. Esto te permitirá tener una mejor comprensión del proyecto y hacer ajustes si es necesario antes de comenzar la construcción.</div> 
          </li>
          <li>
            <strong>Guía de construcción:</strong>
            <div className="">Instrucciones detalladas y consejos útiles para ayudarte a construir tu casa de manera efectiva y segura. La guía te llevara a través de cada paso del proceso de construcción y te proporcionará la información que necesitas para evitar errores costosos.</div> 
          </li>
          <li>
            <strong>Descarga de la lista de materiales:</strong>
            <div className="">Llevala contigo cuando compres los materiales en la tienda. Ahorra tiempo y asegurate de que tienes todos los materiales que necesitas para completar tu proyecto.</div> 
          </li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col items-center bg-[#D9D9D9] text-primary">
        <h2 className='mb-5 w-full text-center my-10 text-2xl'>¿Buscas construir tu propia casa pero no sabes por dónde empezar? </h2>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 w-[80%] my-10">
          <li><strong>¡No te preocupes!</strong> Con nuestra aplicación web, podrás <strong>calcular los materiales</strong> necesarios para construir la casa de tus sueños en cuestión de minutos.</li>
          <li>No importa si eres un experto en construcción o un <strong>principiante</strong>, nuestra herramienta es <strong>fácil de usar</strong> y te ayudará a <strong>ahorrar tiempo y dinero</strong> en tu proyecto de construcción.</li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className='mb-5 w-full text-center'>Planes</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 w-[80%] text-center place-items-center gap-8">
          <li className='bg-primary text-white w-fit h-[250px] items-center justify-center grid rounded-xl p-5'>
            <div className="">Plan Gratis</div>
            <div className="">$0</div>
            <div className="">-</div>
            <Link to='/register' className='text-center rounded-full bg-tertiary px-4 py-2'>Empieza Ahora!</Link>
          </li>
          <li className='bg-primary text-white w-fit h-[250px] items-center justify-center grid rounded-xl p-5'>
            <div className="">Plan Basico</div>
            <div className="">$15</div>
            <div className="">al mes</div>
            <Link to='/register' className='text-center rounded-full bg-tertiary px-4 py-2'>Empieza Ahora!</Link>
          </li>
          <li className='bg-primary text-white w-fit h-[250px] items-center justify-center grid rounded-xl p-5'>
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
