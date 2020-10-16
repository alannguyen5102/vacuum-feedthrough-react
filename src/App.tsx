import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import WireGauge from './WireGauge/WireGauge';
import ProductForm from './ProductForm/ProductForm';



function App() {
  return (
      <div className="container">
        <div className="App">
          <NavBar> </NavBar>
          <ProductForm></ProductForm>
          <Footer></Footer>
        </div>
      </div>
  );
}

export default App;
