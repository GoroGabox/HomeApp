import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext'

function LoginPage() {
  let {login} = useContext(AuthContext)
  return (
    <div className=' bg-gray-200 h-[100vh] grid place-content-center'>
      <div className="grid grid-cols-1 place-items-center place-content-center gap-8 w-72 mt-20">
        <label htmlFor="" className='flex w-full justify-between'>
          Email:
          <input type="email"/>
        </label>
        <label htmlFor="" className='flex w-full justify-between'>
          Contraseña:
          <input type="password" />
        </label>
        <button className='text-center text-white rounded-full bg-tertiary px-4 py-2 w-full md:w-[150px]' onClick={login}>Iniciar sesion</button>
        <Link to='/register' className='text-center text-tertiary rounded-full border-solid border-2 border-tertiary px-4 py-2 w-full md:w-[150px]'>Registrate</Link>
      </div>
    </div>
  )
}

export default LoginPage
