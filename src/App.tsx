import React, { useContext, useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import { Language } from './utils/globals';
import { AppContext, AppProvider } from './context/appContext';
import { Option } from './interfaces/Global';
import Navbar from './components/Navbar/Navbar';


function App() {


  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
