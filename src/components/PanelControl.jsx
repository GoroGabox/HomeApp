import React,{useContext} from 'react'
import CalculatorContext  from "../context/CalculatorContext";

function PanelControl() {

  let {xRange,yRange,zRange,setAncho,setLongitud,setAltura, material, handleMaterial, techo, handleTecho} = useContext(CalculatorContext)

  return (
    <div className="flex flex-col flex-1 md:mt-10">
        <div>
            <div className="mt-5">
                <div className="flex flex-col">
                    <label htmlFor="x" >Ancho (metros):</label>
                    <div className="flex justify-between">
                        <input
                            className="flex w-3/4"
                            type="range"
                            id="x"
                            min="1"
                            max="10"
                            step="0.1"
                            value={xRange}
                            onChange={setAncho}
                        />
                        <input
                            type="number"
                            id="x_text"
                            min="1"
                            max="10"
                            step="0.1"
                            className="text-black w-1/5"
                            value={xRange}
                            onChange={setAncho}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="y">Longitud (metros):</label>
                    <div className="flex justify-between">
                        <input
                            className="flex w-3/4"
                            type="range"
                            id="y"
                            min="1"
                            max="10"
                            step="0.1"
                            value={yRange}
                            onChange={setLongitud}
                        />
                        <input
                            type="number"
                            id="y_text"
                            min="1"
                            max="10"
                            step="0.1"
                            className="text-black w-1/5"
                            value={yRange}
                            onChange={setLongitud}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="z">Altura muros (metros):</label>
                    <div className="flex justify-between">
                        <input
                            className="flex w-3/4"
                            type="range"
                            id="z"
                            min="2.4"
                            max="6"
                            step="0.1"
                            value={zRange}
                            onChange={setAltura}
                        />
                        <input
                            type="number"
                            id="z_text"
                            min="2.4"
                            max="6"
                            step="0.1"
                            className="text-black w-1/5"
                            value={zRange}
                            onChange={setAltura}
                        />
                    </div>
                </div>
            </div>
            <hr className='bg-black mt-5'></hr>
            <div className="mt-5 w-full">
                <div className="flex flex-col mt-5 pl-3">
                    <div className="flex justify-between mb-2">
                        <h2>Sistema constructivo: </h2>
                        <p>(?)</p>
                    </div>
                    <div className="grid grid-cols-3 justify-between items-center">
                        <label htmlFor="muro1" className="flex">
                            Metal:
                            <input
                                className="flex w-fit mx-auto"
                                type="radio"
                                id="muro1"
                                name='muro'
                                value='opcion1'
                                checked={material==='opcion1'}
                                onChange={handleMaterial}
                            />
                        </label>
                        <label htmlFor="muro2" className="flex">
                            Madera:
                            <input
                                className="flex w-fit mx-auto"
                                type="radio"
                                id="muro2"
                                name='muro'
                                value='opcion2'
                                checked={material==='opcion2'}
                                onChange={handleMaterial}
                            />
                        </label>
                        <label htmlFor="muro3" className="flex">
                            Ladrillo:
                            <input
                                className="flex w-fit mx-auto"
                                type="radio"
                                id="muro3"
                                name='muro'
                                value='opcion3'
                                checked={material==='opcion3'}
                                onChange={handleMaterial}
                            />
                        </label>
                    </div>
                </div>
                <hr className='bg-black mt-5'></hr>
                <div className="flex flex-col mt-5 pl-3">
                    <div className="flex justify-between mb-2">
                        <h2>Techo: </h2>
                        <p>(?)</p>
                    </div>
                    <div className="grid grid-cols-2 justify-between items-center">
                        <label htmlFor="techo1" className="flex">
                            1 Pendiente:
                            <input
                                className="flex w-fit mx-auto"
                                type="radio"
                                id="techo1"
                                name='techo'
                                value='opcion1'
                                checked={techo==='opcion1'}
                                onChange={handleTecho}
                            />
                        </label>
                        <label htmlFor="techo2" className="flex">
                            2 Pendiente:
                            <input
                                className="flex w-fit mx-auto"
                                type="radio"
                                id="techo2"
                                name='techo'
                                value='opcion2'
                                checked={techo==='opcion2'}
                                onChange={handleTecho}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <hr className='bg-black mt-5'></hr>
            <div className="my-5">** Altura persona : 1.7 metros **</div>
        </div>
    </div>
  )
}

export default PanelControl
