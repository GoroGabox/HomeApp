import React,{ createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalculatorContext = createContext(null);

export default CalculatorContext;

export const CalculatorProvider = ({children}) => {

    const navigate = useNavigate()

    const [xRange, setXRange] = useState(3);
    const [yRange, setYRange] = useState(3);
    const [zRange, setZRange] = useState(2.4);

    let setAncho = (e) => setXRange(Number(e.target.value))
    let setLongitud = (e) => setYRange(Number(e.target.value))
    let setAltura = (e) => setZRange(Number(e.target.value))

    let irLista = () => {navigate('/calculator/list')}
    let irModelo = () => {navigate('/calculator')}
    let irGuia = () => {navigate('/calculator/guide')}

    let contextData ={
        xRange: xRange,
        yRange: yRange,
        zRange: zRange,
        setAncho: setAncho,
        setLongitud: setLongitud,
        setAltura: setAltura,
        irLista: irLista,
        irModelo: irModelo,
        irGuia: irGuia
    };

    return(
        <CalculatorContext.Provider value={contextData} >
            {children}
        </CalculatorContext.Provider>
    )
};