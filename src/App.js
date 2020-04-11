import React from 'react';

import './App.scss';
import Navbar from './components/Navbar/Navbar.js';
import TourList from './components/TourList/index'

function App() {
  return (
    <main className="App">
       <Navbar/>
       <TourList/>
    </main>
  );
}

export default App;
