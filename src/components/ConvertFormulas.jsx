import React from "react";
import Api from '../constants/Api';
import axios from "axios";
import { useState } from "react";

const ConvertValue = ({zlotyValue, value, setValue}) => {
// let [value, setValue] = useState(0);
     axios.get(Api.baseUrl)
       .then(({data}) => {setValue({value: data[0].rates[2].mid})})
       .catch((error) => console.log(error));
       let result = value.value * zlotyValue;
       console.log(result);
       return (
       <span> {result} </span>
       );
   }

export default ConvertValue;