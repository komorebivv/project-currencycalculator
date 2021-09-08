import React from "react";
import Api from '../constants/Api';
import axios from "axios";
import { useState } from "react";


const finalResult = (zl, other) => {
return zl * other;
}

const ConvertValue = ({zlotyValue, value, setValue, index, nameOfCurrency }) => {

     axios.get(Api.baseUrl)
       .then(({data}) => {setValue({value: data[0].rates[index].mid})
        })
       .catch((error) => console.log(error));
       console.log(value.value);
       let result = finalResult(value.value, zlotyValue);
       console.log(nameOfCurrency);
       return (

       <li> <h6> {nameOfCurrency} </h6>
       {result}
       </li>
       );
   }

export default ConvertValue;