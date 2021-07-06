import React,{useState} from 'react'


export default function LableEx() { 

      const  lable="This is Lable Example.......";
    const handleClick=()=>
    {
        console.log(lable);
    }
    return (
        <div>
            <div className="labelclass">
            <h3>{lable}</h3>
            <button onClick={handleClick}>click me</button>
            </div>
            <hr></hr>
        </div>
    )
}
