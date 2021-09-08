import React from 'react';


const CurrencyElement = ({currencyName, currencyValue}) => {
return (

 <React.Fragment>
         <li>
    <h5>{currencyName}</h5>
    <span>{currencyValue}</span>
         </li>
    </React.Fragment>

)}


export default CurrencyElement