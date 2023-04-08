import React, { useRef, useMemo } from "react"

function mapLengthToRange(l, rangeMin, rangeMax) {
    const lengthMin = 0;
    const lengthMax = 100;
    const length = (l - lengthMin) / (lengthMax - lengthMin);
    const range = (rangeMax - rangeMin) * length + rangeMin;
    return range;
  }


export function LadoA({ ubicacion, altura }) {
    return (
      <>
            <mesh position={[ubicacion, -0.5+altura/2, 0]} scale={[.01, altura, 1]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial  color="green"/>
            </mesh>
      </>
    );
  }

export function LadoB({ textura }) {
    return (
        <>
            <mesh position={[0, -0.5, 0]} scale={[1, 0.01, 1]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="green" />
            </mesh>
        </>
    );
}

export function LadoC({ textura }) {
    const hipotenusa = Math.sqrt(1**2 + 1**2);
    return (
        <>
            <mesh position={[0, 0, 0]} scale={[.01,hipotenusa, 1]} rotation={[0,0,(Math.PI)/4]} >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial  color="green" wireframe={false} />
            </mesh>
        </>
    );
}

export function CerchaSimple({ ladoMenor, altura, textura, ancho, ubicacion}) {
    const numPilares = Math.floor(ladoMenor / 0.6);
    const porcentajeEspacio = 100 / (ladoMenor / 0.6);
  
    const pilares = useMemo(() => {
      let length = ladoMenor;
      const result = [<LadoA ubicacion={-0.5} key={0} textura={textura} altura={1}/>];
      for (let i = 0; i < numPilares; i++) {
        const range = mapLengthToRange(length, -0.5, 0.5);
        const alturaPilar = mapLengthToRange(length, 0, 1);
        length += porcentajeEspacio;
        result.push(<LadoA ubicacion={-range} key={i+1} textura={textura} altura={alturaPilar}/>);
      }
      return result;
    }, [ladoMenor, altura, numPilares, textura]);
  
    return (
      <>
        <mesh 
            position={ladoMenor!=ancho?[ubicacion,(altura/2)+(ladoMenor/8),0]:[0,(altura/2)+(ladoMenor/8),ubicacion]}
            rotation={ladoMenor!=ancho?[0,Math.PI/2,0]:[0,0,0]}
            scale={[ladoMenor,ladoMenor/4,.1]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial visible={false}/>
            {pilares}
            <LadoB/>
            <LadoC/>
        </mesh>
      </>
    );
}

export function CerchaDoble({ ladoMenor, altura, textura, ancho, ubicacion}) {
    const numPilares = Math.floor(ladoMenor / 0.6);
    const porcentajeEspacio = 100 / (ladoMenor / 0.6);
  
    const pilares = useMemo(() => {
      let length = ladoMenor;
      const result = [<LadoA ubicacion={-0.5} key={0} textura={textura} altura={1}/>];
      for (let i = 0; i < numPilares; i++) {
        const range = mapLengthToRange(length, -0.5, 0.5);
        const alturaPilar = mapLengthToRange(length, 0, 1);
        length += porcentajeEspacio;
        result.push(<LadoA ubicacion={-range} key={i+1} textura={textura} altura={alturaPilar}/>);
      }
      return result;
    }, [ladoMenor, altura, numPilares, textura]);
  
    return (
      <>
        <mesh 
            position={ladoMenor!=ancho?[ubicacion,(altura/2)+(ladoMenor/8),(ladoMenor/2)-(ladoMenor/4)]:[(ladoMenor/2)-(ladoMenor/4),(altura/2)+(ladoMenor/8),ubicacion]}
            rotation={ladoMenor!=ancho?[0,-Math.PI/2,0]:[0,0,0]}
            scale={[ladoMenor/2,ladoMenor/4,.1]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial visible={false}/>
            {pilares}
            <LadoB/>
            <LadoC/>
        </mesh>
        <mesh 
            position={ladoMenor!=ancho?[ubicacion,(altura/2)+(ladoMenor/8),(-ladoMenor/2)+(ladoMenor/4)]:[(-ladoMenor/2)+(ladoMenor/4),(altura/2)+(ladoMenor/8),ubicacion]}
            rotation={ladoMenor!=ancho?[0,Math.PI/2,0]:[0,Math.PI,0]}
            scale={[ladoMenor/2,ladoMenor/4,.1]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial visible={false}/>
            {pilares}
            <LadoB/>
            <LadoC/>
        </mesh>
      </>
    );
}