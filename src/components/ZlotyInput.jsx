import React from 'react';

const ZlotyInput = ({zlotyValue, setZlotyValue}) => {

      function handleInputChange(event) {
        setZlotyValue(event.target.value);
    }

    return (
      <div className="forInput">
        <legend>Enter value in Polish zloty</legend>
        <input value = {zlotyValue} onChange={ handleInputChange} />
      </div>
    )}

export default ZlotyInput