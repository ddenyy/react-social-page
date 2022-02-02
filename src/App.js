import React from 'react';
import './App.css';
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import Profile from "./components/Profile.jsx"
const App = () => {
  return (
    <div className="app-wrapper">
    <div class="grid">
    <Header/>
    <Navbar/>
    <Profile/>
  </div>


    </div>
  );  
}

export default App;
