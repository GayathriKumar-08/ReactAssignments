import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyLabClass from './component/MyLabClass.js';
import Labfun from './component/MyLabFunction.js';
import Example from './component/Example.js';
import Myregister from './component/Newfile.js';
import Myreg from './component/Myreg.js';
import Demo from './component/Demo.js';

function App() {
  const dt=new Date(2000,4,4);
  const value=dt.toISOString;
  const user=[
    {id:1,name:"gayu"},
    {id:2,nmae:"keethu"},
    {id:3,nmae:"vv"}
  ];
  const user123=[
    {id:1,name:"gayu123"},
    {id:2,nmae:"keethu123"},
    {id:3,nmae:"vv123"}
  ];

  const labelName = "This is student record";
  return (
   // React.createElement("div",{},React.createElement("h1",{className:'header'},"My First Example".concat(dt.toString())))
   <div>
     <h1 className="header">My First Example{dt.toString()}</h1>
   
   <div className="header">
     <Example data={user} ts={dt} sn={labelName}/>
     <hr>
     </hr>
     <Example data={user123} ts={dt} sn={labelName}/>
      </div>
   <div className="demo">
     <Labfun/>
   </div>
   <div>
     <Demo/>
   </div>
   <div>
     <Myregister/>
   </div>
   <div>
     <Myreg/>
     </div>
   </div>
  );
}

export default App;
