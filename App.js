import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dtail from './components/Dtail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* here we are changeing the page of webpage by using Router */}
        <Router>
          <Header/>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
             
          
          <Route exact path="/dtail" element={<Dtail/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>  
      </Router>   
    </div>

     
  );
}

export default App;
