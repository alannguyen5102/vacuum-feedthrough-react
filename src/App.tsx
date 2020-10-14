import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import NavBar from './NavBar/NavBar';



function App() {
  return (
      <div className="container">
        <div className="App">
          <NavBar> </NavBar>
        </div>
      </div>
  );
}

export default App;
