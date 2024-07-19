import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Hero/>
        <AboutUs />
    <Services />
    <ContactUs />
        <Footer />
      </div>
    </>
  );
}


export default App;
