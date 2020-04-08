import React from 'react';
import Footer from './Footer'
import Fundraising from './Fundraising'
import './App.css';

import MyNavBar from './MyNavBar.js'
import Header from './Header'
import About from './About'

function App() {
  return (
    <div>
      <MyNavBar />
      <Header />
      <About />
      <Fundraising />
      <Footer />
    </div>
  );
}

export default App;
