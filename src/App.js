import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

import Services from './components/pages/Services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/services" element=<Services/>/>
        <Route path="/products" element=<Products/> />
      </Routes>
    </Router>
  );
}

export default App;