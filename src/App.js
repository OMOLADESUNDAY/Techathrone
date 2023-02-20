import React from 'react';
import './App.css';

// import { Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
