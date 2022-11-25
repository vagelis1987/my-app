import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/product/ProductListing';
import University from './containers/university/UniversityListing';
import ProductDetail from './containers/product/ProductDetail';
import Home from './containers/main/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/university' element={<University />} />
          <Route path='/product' exact element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
