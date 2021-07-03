import logo from './logo.svg';
import './App.css';
import StudentDetails from './components/StudentDetails';
import Newcomp from './components/Newcomp';
import WeatherEx from './components/WeatherEx';

function App() {
  return (
    <div className="App">
     {/* <div>
       <StudentDetails/>
     </div> */}
     <div>
       <Newcomp/>
     </div>
     <div>
       <WeatherEx/>
     </div>
    </div>
  );
}

export default App;
