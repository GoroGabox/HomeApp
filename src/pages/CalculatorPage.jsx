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
    <div className="flex flex-col bg-secondaryLight text-white h-[90vh] md:flex-row">
      <Scene className="w-full h-[50%] md:w-2/3 md:h-full" ancho={xRange} longitud={yRange} altura={zRange}></Scene>
      <div className="flex flex-col w-full h-[50%] bg-orange-600 p-10 overflow-y-auto md:w-1/3 md:h-full">
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
                    step="0.01"
                    value={xRange}
                    onChange={(e) => setXRange(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="x_text"
                    min="0"
                    max="10"
                    step="0.01"
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
                    step="0.01"
                    value={yRange}
                    onChange={(e) => setYRange(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="y_text"
                    min="0"
                    max="10"
                    step="0.01"
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
                    max="10"
                    step="0.01"
                    value={zRange}
                    onChange={(e) => setZRange(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="z_text"
                    min="2.4"
                    max="10"
                    step="0.01"
                    className="text-black"
                    value={zRange}
                    onChange={(e) => setZRange(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-1/2 flex justify-around">
            <button className="bg-cyan-700 px-3 py-1 rounded-full" onClick={handleReset}>Reset</button>
            <button className="bg-cyan-700 px-3 py-1 rounded-full" type="submit">Calcular</button>
          </div>
        </form>
        <hr className="my-10"/>
        <LosaCemento ancho={xRange} longitud={yRange} />
        <hr className="my-10"/>
        <MuroMetalcom ancho={xRange} longitud={yRange} altura={zRange} />
        <hr className="my-10"/>
        <MuroMadera ancho={xRange} longitud={yRange} altura={zRange} />
        <hr className="my-10"/>
        <TechoDobleMetalcom ancho={xRange} longitud={yRange} />
        <hr className="my-10"/>
        <TechoSimpleMetalcom ancho={xRange} longitud={yRange} />
        <hr className="my-10"/>
        <CercoPostes ancho={xRange} longitud={yRange} altura={zRange} />
      </div>
    </div>
  );
}

export default CalculatorPage;
