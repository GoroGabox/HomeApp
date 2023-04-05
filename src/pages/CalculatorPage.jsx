import React, { useContext } from "react";
import {
  LosaCemento,
  MuroMetalcom,
  MuroMadera,
  TechoDobleMetalcom,
  TechoSimpleMetalcom,
  PanelControl,
} from "../components";

import { Scene } from "../components/canvas";

import CalculatorContext  from "../context/CalculatorContext";

function CalculatorPage() {

  let {xRange,yRange,zRange,setAncho,setLongitud,setAltura, irLista} = useContext(CalculatorContext)


  return (
      <div className="flex flex-col h-[90vh] md:flex-row">
        <Scene className="w-full h-[50%] md:w-2/5 md:h-full" ancho={xRange} longitud={yRange} altura={zRange} />
        <div className="flex flex-col w-full h-full p-6 overflow-y-auto md:w-3/5 md:h-full bg-[#dbdbdb]">
          <PanelControl/>
          <div onClick={irLista} className="bg-tertiary px-5 py-3 text-white font-bold text-center text-xl">Generar lista</div>
        </div>
      </div>
  );
}

export default CalculatorPage;
