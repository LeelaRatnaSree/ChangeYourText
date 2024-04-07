import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const showalerts=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2500);

  }
  const togglemode=()=>{
    if (mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#07224a';
      showalerts("dark mode is enabled","success");
      document.title="Textutils - Dark mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalerts("light mode is enabled","success");
      document.title="Textutils - Light mode"
    }

  }
    
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} about=' About'/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route path="/about" element={< About mode={mode} togglemode={togglemode}/>} />
          <Route path="/" element={<TextForm heading="Enter your text here to analyze below"  mode={mode} showalerts={showalerts}/> } />
      </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;
