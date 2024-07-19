import React from 'react';
import Header from './Header';

function Hero() {
  return (
    <>
    <section className="hero">
      <Header/>
      <div className="hero-content">
        <h1>Your Trusted Partner in <br />Medical Equipment </h1>
        <p>Providing the <span className='highlighted-text'>Best</span> medical equipment for your healthcare needs</p>
        <button><a href="#aboutus">Learn more about our mission</a></button>
      </div>
    </section>
    </>
  );
}

export default Hero;