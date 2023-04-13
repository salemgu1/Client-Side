import logo from './logo.svg';
import './App.css';
import BloodTransfusion from './components/BloodTransfusion';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Transfusions from './components/Transfusions';
import BloodManagement from './components/BloodManagement';
import MassBloodWithdrawal from './components/handleEmergencyBlood';


function App() {

  const [transfusions, setTransfusions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/transfusions')
      .then(response => response.json())
      .then(data => setTransfusions(data))
      .catch(error => console.error(error));
  }, [transfusions]);

  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<Transfusions transfusions = {transfusions}/>}/>
      <Route path="/transfusion" element =  {<BloodTransfusion/>}/>
      <Route path="/checkBlood" element = {<BloodManagement transfusions = {transfusions}/>}/>
      <Route path="/bloodWithdrawal" element = {<MassBloodWithdrawal transfusions = {transfusions}/>}/>

    </Routes>
  </Router>
  );
  // return (
  //   <div className="App">
  //     <BloodTransfusion/>
  //   </div>
  // );
}

export default App;
