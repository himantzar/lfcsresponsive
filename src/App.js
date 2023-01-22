import './App.css';
import React from "react";
import "./App.css";

import HomePage from './Pages/HomePage';


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
         <Routes>
           <Route exact path='/' element={<HomePage/>} />
           <Route exact path='/' element={<HomePage/>} />
           <Route exact path='/' element={<HomePage/>} />
           <Route exact path='/' element={<HomePage/>} />
           <Route exact path='/' element={<HomePage/>} />
          
         </Routes> 
      </Router> 
    
    
    </>
  );
}

export default App;
