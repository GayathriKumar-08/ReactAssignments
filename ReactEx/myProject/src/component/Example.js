import React, { Component } from 'react'

const Example=({data,ts,ln})=>{
  console.log("student Records!!!!");
  console.log(data);
  console.log(ts);
  console.log(ln);
  let response=" ";
  let b=false;
  if(b)
  {
      response=(
          
              <div>
              <h1>Hello this is My lab class!!!</h1>
              <div>React Example....</div>
              </div>
      )
  }else{
      response=(
          <>
          <div>Working on!!!!!!!!</div>
          <h1>Sample Program............</h1>
          </>
      )
  }
  
  return (
    <div>
        <h1>Hello!!!!</h1>
    </div>
)
}

export default Example;