import React, { useRef, useMemo } from "react";

function mapLengthToRange(l, rangeMin, rangeMax) {
  const lengthMin = 0;
  const lengthMax = 100;
  const length = (l - lengthMin) / (lengthMax - lengthMin);
  const range = (rangeMax - rangeMin) * length + rangeMin;
  return range;
}

function Muros({ ancho, longitud, altura, textura }) {
  const mesh = useRef();
  const grosor = 0.1;

  return (
    <group>
      <mesh
        position={[-ancho / 2 + grosor / 2, 0, 0]}
        scale={[grosor, altura, longitud]}
      >
        <meshBasicMaterial color="red" wireframe={true} />
        <boxGeometry args={[1, 1, 1]} />
        <MuroX longitud={longitud} altura={altura} textura={textura} />
        <mesh position={[-0.45, 0, 0]} scale={[grosor / 10, 1, 1]}>
          <meshBasicMaterial color="red" />
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </mesh>
      <mesh
        position={[ancho / 2 - grosor / 2, 0, 0]}
        scale={[grosor, altura, longitud]}
      >
        <meshBasicMaterial color="blue" wireframe={true} />
        <boxGeometry args={[1, 1, 1]} />
        <MuroX longitud={longitud} altura={altura} textura={textura} />
        <mesh position={[0.45, 0, 0]} scale={[grosor / 10, 1, 1]}>
          <meshBasicMaterial color="blue" wireframe={true} />
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </mesh>
      <mesh position={[0, 0, longitud / 2]} scale={[ancho, altura, grosor]}>
        <meshBasicMaterial color="orange" wireframe={true} />
        <boxGeometry args={[1, 1, 1]} />
        <MuroY longitud={ancho} altura={altura} textura={textura} />
        <mesh position={[0, 0, 0.45]} scale={[1, 1, grosor / 10]}>
          <meshBasicMaterial color="orange" wireframe={true} />
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </mesh>
      <mesh position={[0, 0, -longitud / 2]} scale={[ancho, altura, grosor]}>
        <meshBasicMaterial color="purple" wireframe={true} />
        <boxGeometry args={[1, 1, 1]} />
        <MuroY longitud={ancho} altura={altura} textura={textura} />
        <mesh position={[0, 0, -0.45]} scale={[1, 1, grosor / 10]}>
          <meshBasicMaterial color="purple" />
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </mesh>
    </group>
  );
}

export default Muros;

export function MuroX({ longitud, altura, textura }) {
  const numPilares = Math.floor(longitud / 0.6 + 1);
  const porcentajeEspacio = 100 / (longitud / 0.6);

  const pilares = useMemo(() => {
    const result = [];
    let length = 0;
    for (let i = 0; i < numPilares; i++) {
      const range = mapLengthToRange(length, -0.5, 0.5);
      length += porcentajeEspacio;
      result.push(<PilarX ubicacion={range} key={i} textura={textura} />);
    }
    return result;
  }, [longitud, altura, numPilares, textura]);

  return (
    <>
      {pilares}
      <Viga altura={0.5} />
      <Viga altura={-0.5} />
    </>
  );
}

export function MuroY({ longitud, altura, textura }) {
  const numPilares = Math.floor(longitud / 0.6 + 1);
  const porcentajeEspacio = 100 / (longitud / 0.6);

  const pilares = useMemo(() => {
    const result = [];
    let length = 0;
    for (let i = 0; i < numPilares; i++) {
      const range = mapLengthToRange(length, -0.5, 0.5);
      length += porcentajeEspacio;
      result.push(<PilarY ubicacion={range} key={i} textura={textura} />);
    }
    return result;
  }, [longitud, altura, numPilares, textura]);

  return (
    <>
      {pilares}
      <Viga altura={0.5} />
      <Viga altura={-0.5} />
    </>
  );
}

export function PilarX({ ubicacion, textura }) {
  return (
    <>
      <mesh position={[0, 0, ubicacion]} scale={[1, 1, 0.01]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={textura} />
      </mesh>
    </>
  );
}

export function PilarY({ ubicacion, textura }) {
  return (
    <>
      <mesh position={[ubicacion, 0, 0]} scale={[0.01, 1, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={textura} />
      </mesh>
    </>
  );
}

export function Viga({ altura, textura }) {
  return (
    <>
      <mesh position={[0, altura, 0]} scale={[1, 0.01, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={textura} />
      </mesh>
    </>
  );
}
