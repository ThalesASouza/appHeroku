import React from 'react'

export default function Inputs({type,value,onChange,}) {
    const handleData = (event) => {
        const newPerido = event.target.value;
        onChange(newPerido);
      };
    return (
        <div>
         <input type={type} value={value} onChange={handleData} />
        </div>
    )
}
