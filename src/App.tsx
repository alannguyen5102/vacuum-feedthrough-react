import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';



function App() {
  return (
      <div className="container">
        <div className="App">
          <NavBar> </NavBar>
          <Footer></Footer>
        </div>
      </div>
  );
}

export default App;
