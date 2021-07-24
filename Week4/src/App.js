import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import LoginPage from './component/LoginPage';
import Dashboard from './component/Dashboard';
import Student from './component/Student';
import StudentDetails from './component/StudentDetails';
import Studentoperations from './component/Studentoperations';
import Update from './component/Update';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/studentreport" component={Student}></Route>
        <Route path="/studentlist" component={StudentDetails}></Route>
        <Route path="/studoperation" component={Studentoperations}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/update/:id" component={Update}></Route>
        <Route path="/login" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
