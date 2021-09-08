import CurrencyElement from './CurrencyElement'
import {useState} from "react";
import Api from "../constants/Api";
import axios from "axios";
import ConvertValue from './ConvertFormulas';

// pobieranie z API i ustawianie stanu obecnej wartosci waluty

const ZlotyInput = ({zlotyValue, setZlotyValue}) => {
//     let [zlotyValue, setValue] = useState(0);

      function handleInputChange(event) {
        setZlotyValue(event.target.value);
    }

    return (
      <fieldset>
        <legend>Enter value in Polish zloty</legend>
        <input value = {zlotyValue} onChange={ handleInputChange} />

      </fieldset>
    )}



const CurrencyBoard = () => {
    let [value, setValue] = useState(0);
    let [zlotyValue, setZlotyValue] = useState(0);

    return ( <ul>
    <ZlotyInput zlotyValue={zlotyValue} setZlotyValue={setZlotyValue}>
    </ZlotyInput>
        <ConvertValue zlotyValue={zlotyValue} value={value} setValue={setValue}> </ConvertValue>
        </ul>
    )
}

export default CurrencyBoard