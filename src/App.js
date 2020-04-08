import React from 'react';
import Footer from './Footer'
import './App.css';

import MyNavBar from './MyNavBar.js'
import HeaderCarousel from './HeaderCarousel'
import About from './About'

function App() {
  return (
    <div>
      <MyNavBar />
      <HeaderCarousel />
      <About />
      <Footer />
    </div>
  );
}

export default App;
