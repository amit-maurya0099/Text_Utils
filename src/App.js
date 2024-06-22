
import React, { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000)
}

  const[mode,setMode]=useState("light")
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#053149'
    showAlert("Dark mode has been enabled",'success')
    document.title="TextUtils-Dark mode"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled",'success')
    document.title="TextUtils-light mode"
  }
}

  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route exact path="/about" element={<About/>}>
            
        </Route>
         
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
          
            
          </Route>
        </Routes>
      
      </div>
      </Router>
    </>  
  );
}

export default App;
