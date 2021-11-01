import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Productlist from './components/Productlist';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Productlist />
      </Router>
    </div>
  );
}

export default App;
