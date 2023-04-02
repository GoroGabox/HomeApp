import React, { useEffect, useState } from "react";
import {
  LosaCemento,
  MuroMetalcom,
  MuroMadera,
  TechoDobleMetalcom,
  TechoSimpleMetalcom,
  CercoPostes,
} from "../components";

import { Scene } from "../components/canvas";

function CalculatorPage() {
  const [xRange, setXRange] = useState(1);
  const [yRange, setYRange] = useState(1);
  const [zRange, setZRange] = useState(2.4);

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  const handleReset = (e) => {
    e.preventDefault;
    setXRange(1);
    setYRange(1);
    setZRange(2.4);
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 to-sky-900  text-white h-[90vh] md:flex-row">
      <Scene className="w-full h-[50%] md:w-2/5 md:h-full" ancho={xRange} longitud={yRange} altura={zRange}></Scene>
      <div style={{height:'100%'}} className="flex flex-col w-full bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 overflow-y-auto md:w-3/5 md:h-full">
        <form className="flex flex-col flex-1">
          <div>
            <h2 className="text-3xl">Medidas</h2>
            <div className="mt-5">
              <div className="flex flex-col">
                <label htmlFor="x" >Ancho (metros):</label>
                <div className="flex">
                  <input
                    className="flex flex-1"
                    type="range"
                    id="x"
                    min="0"
                    max="10"
                    step="0.1"
                    value={xRange}
                    onChange={(e) => setXRange(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="x_text"
                    min="0"
                    max="10"
                    step="0.1"
                    className="text-black"
                    value={xRange}
                    onChange={(e) => setXRange(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="y">Longitud (metros):</label>
                <div className="flex">
                  <input
                    className="flex flex-1"
                    type="range"
                    id="y"
                    min="0"
                    max="10"
                    step="0.1"
                    value={yRange}
                    onChange={(e) => setYRange(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="y_text"
                    min="0"
                    max="10"
                    step="0.1"
                    className="text-black"
                    value={yRange}
                    onChange={(e) => setYRange(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="z">Altura (metros):</label>
                <div className="flex">
                  <input
                    className="flex flex-1"
                    type="range"
                    id="z"
                    min="2.4"
                    max="6"
                    step="0.1"
                    value={zRange}
                    onChange={(e) => setZRange(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="z_text"
                    min="2.4"
                    max="6"
                    step="0.1"
                    className="text-black"
                    value={zRange}
                    onChange={(e) => setZRange(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr className="my-5"/>
        <LosaCemento ancho={xRange} longitud={yRange} />
        <hr className="my-5"/>
        <MuroMetalcom ancho={xRange} longitud={yRange} altura={zRange} />
        <hr className="my-5"/>
        <MuroMadera ancho={xRange} longitud={yRange} altura={zRange} />
        <hr className="my-5"/>
        <TechoDobleMetalcom ancho={xRange} longitud={yRange} />
        <hr className="my-5"/>
        <TechoSimpleMetalcom ancho={xRange} longitud={yRange} />
      </div>
    </div>
  );
}

export default CalculatorPage;
