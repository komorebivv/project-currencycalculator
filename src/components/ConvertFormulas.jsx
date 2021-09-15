import React from "react";
import Api from '../constants/Api';
import axios from "axios";

const finalResult = (zl, otherCurrency) => {
  return zl * otherCurrency;
}

const ConvertValue = ({zlotyValue, value, setValue, index, nameOfCurrency }) => {

     axios.get(Api.baseUrl)
       .then(({data}) => {setValue({value: data[0].rates[index].mid})
        })
       .catch((error) => console.log(error));

       let result = finalResult(value.value, zlotyValue).toFixed(2);
       return (

       <li> <h6> {nameOfCurrency} </h6>
       {isNaN(result)  ? 'Please type a number' : result}
       </li>
       );
   }

export default ConvertValue;