import React, { useState } from 'react';
import AnswerComponent from './AnswerComponent';
  

const Myreg =(props)=> {
   const emp={
    a:10,
    b:100
   }
   const [calc,setCalc] = useState({
    numerator : 0,
    demonrator : 0,
    answer : 0,
    count:0,
    employee  :emp
});

const handleOnChangeEvent = (event) => {
    //function handleOnChangeEvent(event) {
        const {name,value} = event.target;
        
        setCalc((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const handleNumberDivide = () => {
        const num = calc.numerator;
        const denom = calc.demonrator

        let result = num/denom;

        setCalc((prev) => {
            return {
                ...prev,
                count : prev.count+1,
                answer:result
            }
        });
    }

        return (
            <div>
                <h1>My New function</h1>
            <section>
                <div>
                    <label>
                        Number First Value
                    </label>
                    <input type="text" value={calc.numerator}  name="numerator" onChange={handleOnChangeEvent}/>
                </div>
                <div>
                    <label>
                        Number Second Value
                    </label>
                    <input type="text" value={calc.demonrator}  name="demonrator" onChange={handleOnChangeEvent} />
                </div>
                <div>
                    <button onClick={handleNumberDivide}>GetAnswer</button>
                </div>
                   <AnswerComponent ans={calc.answer}/>
            </section>
            </div>
        )
    
}
export default Myreg;