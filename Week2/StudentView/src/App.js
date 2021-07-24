import './App.css';
import React, { useState } from 'react';
import LableEx from './components/LableEx';
// import Student from './components/Student';
//import StudentDetails from './components/StudentDetails';
import StudentExample from './components/StudentExample';
import StudentValidation from './components/StudentValidation';

function App() {
 
  const dt = new Date(2022, 4, 4);
  const username = "Gayathri.GK";
  const value = (username);
 
const handleUserAddition=(e)=>
{
  console.log("This is working......");
  console.log(e);
}

  return (
    <div className="App">

      <div className="colorset">{value}</div>
      <h3 className="colorset1">Date Example:{dt.toString()}</h3>
      <div>
        <LableEx />
      </div>
      <div>
        <StudentExample onUserAdd={handleUserAddition} />
      </div>
     
      
      {/* <div>
        <StudentValidation/>
      </div> */}
    
    </div>
  );
}

export default App;
