import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import './components/style.css';
import Clipart from './components/clipart'
import './App.css';

function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
      <div className="main">
        <About />
        <Clipart />
      </div>
    </div>
  );
}

export default App;
