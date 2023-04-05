import React,{useContext} from 'react'
import CalculatorContext  from "../context/CalculatorContext";

function PanelControl() {

    let {xRange,yRange,zRange,setAncho,setLongitud,setAltura} = useContext(CalculatorContext)

  return (
    <div className="flex flex-col flex-1">
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
                <label htmlFor="z">Altura (metros):</label>
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
        </div>
    </div>
  )
}

export default PanelControl
