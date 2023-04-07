import React, { useContext } from "react";
import {PanelControl,} from "../components";

import { Scene } from "../components/canvas";

import CalculatorContext  from "../context/CalculatorContext";

function CalculatorPage() {

  let { xRange, yRange, zRange, calcularMateriales, irLista, material, techo } = useContext(CalculatorContext)

  return (
      <div className="flex flex-col h-[100vh] md:flex-row">
        <Scene className="w-full h-[50%] md:w-2/5 md:h-full" ancho={xRange} longitud={yRange} altura={zRange} />
        <div className="flex flex-col w-full h-full p-6 overflow-y-auto md:w-3/5 md:h-full bg-[#dbdbdb]">
          <PanelControl/>
          <div onClick={()=>{calcularMateriales(xRange, yRange, zRange, material, techo),irLista()}} className="bg-blue-600 px-5 py-3 text-white font-bold text-center text-xl cursor-pointer">Generar lista</div>
        </div>
      </div>
  );
}

export default CalculatorPage;
