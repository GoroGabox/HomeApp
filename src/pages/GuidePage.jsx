import React, {useContext} from 'react'
import CalculatorContext  from "../context/CalculatorContext";

function GuidePage() {

  let {irLista, irModelo} = useContext(CalculatorContext)

  return (
    <div className='mt-20'>
      Guide page
      <div onClick={irModelo} className="bg-tertiary px-5 py-3 text-white font-bold text-center text-xl">Modelo</div>
        <div onClick={irLista} className="text-tertiary px-5 py-3 font-bold text-center text-xl border-solid border-2 border-tertiary">Lista</div>
    </div>
  )
}

export default GuidePage
