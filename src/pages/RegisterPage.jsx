import React from 'react'

function RegisterPage() {
  return (
    <div className=' bg-gray-200 h-fit grid place-content-center'>
      <div className="grid grid-cols-1 place-items-center place-content-center gap-8 md:w-[800px] mb-10">
        <h2 className='text-3xl mt-10'>Crea una cuenta</h2>
        <label htmlFor="" className='flex w-full justify-between'>
          Nombre:
        </label>
        <input type="text" className='w-full'/>
        <label htmlFor="" className='flex w-full justify-between'>
          Email:
        </label>
        <input type="text" className='w-full'/>
        <label htmlFor="" className='flex w-full justify-between'>
          Contraseña:
        </label>
        <input type="text" className='w-full'/>
        <label htmlFor="" className='flex w-full justify-between'>
            Repite la contraseña:
        </label>
        <input type="text" className='w-full'/>
        <h2 className='text-3xl mt-10'>Escoge un plan</h2>
        <div className="flex flex-col items-center w-full">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 text-center place-items-center mt-8 w-full ">
            <li className='bg-primary text-white w-full h-[250px] items-center justify-center grid rounded-xl p-5 checked:border-solid checked:border-4 checked:border-tertiary'>
              <div className="font-black text-xl">Gratis</div>
              <div className="font-bold text-2xl">$0</div>
              <div className="font-bold">-</div>
            </li>
            <li className='bg-primary text-white w-full h-[250px] items-center justify-center grid rounded-xl p-5'>
              <div className="font-black text-xl">Basico</div>
              <div className="font-bold text-2xl">$15</div>
              <div className="font-bold">al mes</div>
            </li>
            <li className='bg-primary text-white w-full h-[250px] items-center justify-center grid rounded-xl p-5'>
              <div className="font-black text-xl">Premium</div>
              <div className="font-bold text-2xl">$150</div>
              <div className="font-bold">al año</div>
            </li>
          </ul>
        </div>
        <button className='text-center text-white rounded-full bg-tertiary px-4 py-2 w-full md:w-[150px]'>Registrarse</button>
        <a href='/login' className='text-center text-tertiary rounded-full border-solid border-2 border-tertiary px-4 py-2 w-full md:w-[150px]'>Inicia sesion</a>
      </div>
    </div>
  )
}

export default RegisterPage
