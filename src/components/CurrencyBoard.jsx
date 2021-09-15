import {useState} from "react";
import ConvertValue from './ConvertFormulas';
import ZlotyInput from './ZlotyInput';

const CurrencyBoard = () => {
    let [dolar, setDolar] = useState(0);
    let [euro, setEuro] = useState(0);
    let [frank, setFrank]= useState(0);
    let [forint, setForint]  = useState(0);
    let [norwegianCrown, setNorwegianCrown] = useState(0);
    let [zlotyValue, setZlotyValue] = useState(0);

    return ( <div className="board">
    <ul>
    <ZlotyInput zlotyValue={zlotyValue} setZlotyValue={setZlotyValue}>
    </ZlotyInput>
        <ConvertValue nameOfCurrency = {'dolar'} zlotyValue={zlotyValue} value={dolar} setValue={setDolar} index={1} > </ConvertValue>
        <ConvertValue nameOfCurrency = {'euro'} zlotyValue={zlotyValue} value={euro} setValue={setEuro} index={7} > </ConvertValue>
        <ConvertValue nameOfCurrency = {'frank'} zlotyValue={zlotyValue} value={frank} setValue={setFrank} index={9} > </ConvertValue>
        <ConvertValue nameOfCurrency = {'forint'} zlotyValue={zlotyValue} value={forint} setValue={setForint} index={8} > </ConvertValue>
        <ConvertValue nameOfCurrency = {'norwegian crown'} zlotyValue={zlotyValue} value={norwegianCrown} setValue={setNorwegianCrown} index={16} > </ConvertValue>
        </ul>
        </div>
    )
}

export default CurrencyBoard