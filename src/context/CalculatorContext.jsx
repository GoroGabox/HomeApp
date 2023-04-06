import React,{ createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalculatorContext = createContext(null);

export default CalculatorContext;

export const CalculatorProvider = ({children}) => {

    const navigate = useNavigate();

    const [xRange, setXRange] = useState(3);
    const [yRange, setYRange] = useState(3);
    const [zRange, setZRange] = useState(2.4);

    const [anchoFinal, setAnchoFinal] = useState(xRange);
    const [longitudFinal, setLongitudFinal] = useState(yRange);
    const [alturaFinal, setAlturaFinal] = useState(zRange);

    const [material, setMaterial] = useState('opcion1');
    let handleMaterial = (e) => setMaterial(e.target.value);

    const [techo, setTecho] = useState('opcion1');
    let handleTecho = (e) => setTecho(e.target.value);

    let setAncho = (e) => setXRange(Number(e.target.value));
    let setLongitud = (e) => setYRange(Number(e.target.value));
    let setAltura = (e) => setZRange(Number(e.target.value));

    const calcularMetal = () => {

    };
    const calcularMadera = () => {};
    const calcularLadrillo = () => {};

    const ladrilloCantidad = () => {};

    const calcularUnaPendiente = () => {};
    const calcularDosPendiente = () => {};

    const ladrilloVolumen = 0.21*0.14*0.07;
    const grosorCuerda = 0;
    const alturaCadena = 0;

    let irModelo = () => {navigate('/calculator')};
    let irGuia = () => {navigate('/calculator/guide')};
    let irLista = () => {navigate('/calculator/list')};

    const calcularMateriales = (ancho, longitud, altura, material, tipoTecho) => {
        setAnchoFinal(ancho)
        setLongitudFinal(longitud)
        setAlturaFinal(altura) 

        if (material==='opcion1') {calcularMetal()}
        if (material==='opcion2') {calcularMadera()}
        else{calcularLadrillo()}

        if (tipoTecho==='opcion1') {calcularUnaPendiente()}
        else{calcularDosPendiente()}
    };

    let contextData ={
        //Datos
        xRange: xRange,
        yRange: yRange,
        zRange: zRange,
        ancho: anchoFinal,
        longitud: longitudFinal,
        altura: alturaFinal,
        material: material,
        techo: techo,

        //Funciones
        setAncho: setAncho,
        setLongitud: setLongitud,
        setAltura: setAltura,
        irModelo: irModelo,
        irGuia: irGuia,
        irLista: irLista,
        calcularMateriales: calcularMateriales,
        handleMaterial: handleMaterial,
        handleTecho: handleTecho,
    };

    return(
        <CalculatorContext.Provider value={contextData} >
            {children}
        </CalculatorContext.Provider>
    )
};