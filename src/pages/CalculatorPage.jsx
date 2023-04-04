import React, { useState, useContext } from "react";
import {
  LosaCemento,
  MuroMetalcom,
  MuroMadera,
  TechoDobleMetalcom,
  TechoSimpleMetalcom,
} from "../components";

import { Scene } from "../components/canvas";

import CalculatorContext  from "../context/CalculatorContext";

function CalculatorPage() {

  let {xRange,yRange,zRange,setAncho,setLongitud,setAltura} = useContext(CalculatorContext)


  return (
      <div className="flex flex-col bg-gradient-to-r from-blue-500 to-sky-900  text-white h-[90vh] md:flex-row">
        <Scene className="w-full h-[50%] md:w-2/5 md:h-full" ancho={xRange} longitud={yRange} altura={zRange} />
        <div style={{ height: '100%' }} className="flex flex-col w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 overflow-y-auto md:w-3/5 md:h-full">
          <div className="flex flex-col flex-1">
            <div>
              <div className="mt-5">
                <div className="flex flex-col">
                  <label htmlFor="x" >Ancho (metros):</label>
                  <div className="flex">
                    <input
                      className="flex flex-1"
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
                      className="text-black"
                      value={xRange}
                      onChange={setAncho}
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
                      className="text-black"
                      value={yRange}
                      onChange={setLongitud}
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
                      onChange={setAltura}
                    />
                    <input
                      type="number"
                      id="z_text"
                      min="2.4"
                      max="6"
                      step="0.1"
                      className="text-black"
                      value={zRange}
                      onChange={setAltura}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <LosaCemento ancho={xRange} longitud={yRange} />
          <hr className="my-5" />
          <MuroMetalcom ancho={xRange} longitud={yRange} altura={zRange} />
          <hr className="my-5" />
          <MuroMadera ancho={xRange} longitud={yRange} altura={zRange} />
          <hr className="my-5" />
          <TechoDobleMetalcom ancho={xRange} longitud={yRange} />
          <hr className="my-5" />
          <TechoSimpleMetalcom ancho={xRange} longitud={yRange} />
        </div>
      </div>
  );
}

export default CalculatorPage;
