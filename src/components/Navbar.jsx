import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext'

function Navbar() {
  let {user, logout} = useContext(AuthContext)

  return (
    <div className='flex justify-between items-center bg-primary text-white h-[10vh]'>
      <div className="w-[60%] flex justify-around">
        <Link
            to='/'
            className='flex'
        >
          Home
        </Link>
        <Link
            to='/calculator'
            className='flex'
        >
          Calculator
        </Link>
      </div>
      <div className="w-[60%] flex gap-10 justify-end mr-4">
        {user?
        <>
          <div>{user.name}</div>
          <div onClick={logout}>Log out</div>
        </>
        :
        <>
          <Link
              to='/login'
              className='flex'
          >
            Login
          </Link>
          <Link
              to='/register'
              className='flex'
          >
            Register
          </Link>
        </>
        }
      </div>
    </div>
  )
}

export default Navbar
