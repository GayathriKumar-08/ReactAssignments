import './App.css';
import React, { useState } from 'react';
import Student from './component/Student';
import StudentDetails from './component/StudentDetails';
import LoginPage from './component/LoginPage';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import StudentRecordView from './component/StudentRecordView';
//import GetMessage from './component/GetMessage';
// import { messageService } from './services/MessageService';
function App() {

  // const handleOnAdd = (e) => {
  //   console.log("iam from app.js");
  //   console.log(e);

  // }
  return (
    <div className="App">
      {/* <div>
        <Student />
      </div>
      <div>
        <StudentDetails />
      </div>
      <div>
        <LoginPage />
      </div>
      <div>
        <HomePage />
      </div> */}


      <Router>
        <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
          <ul class="nav flex-column text-white w-100">
          <li href="#" class="nav-link">
              <Link to="/login" className="mx-2" style={{ color:'#31E9E9',fontSize:'18px'}}>Login</Link>
            </li>
            <li href="#" class="nav-link">
              <Link to="/studentreport" className="mx-2"style={{ color:'#31E9E9',fontSize:'18px'}}>Student Report</Link>
            </li>
            <li href="#" class="nav-link">
              <Link to="/studentresult" className="mx-2"style={{ color:'#31E9E9',fontSize:'18px'}}>Student Result</Link>
            </li>
            <li href="#" class="nav-link">
              <Link to="/StudentRecordView" className="mx-2"style={{ color:'#31E9E9',fontSize:'18px'}}> Students Operations</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route path="/studentreport" component={Student}></Route>
          <Route path="/studentresult" component={StudentDetails}></Route>
          <Route path="/StudentRecordView" component={StudentRecordView}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
