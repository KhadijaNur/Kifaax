// src/components/Header.js
import React, { useEffect } from 'react';
import './Components/Header.css';
import logo from './assets/logo.png'; // Adjust the path to your logo


const Header = () => {
    useEffect(() => {
        const mobileNav = document.querySelector(".hamburger");
        const navbar = document.querySelector(".menubar");
    
        const toggleNav = () => {
          navbar.classList.toggle("active");
          mobileNav.classList.toggle("hamburger-active");
        };
    
        mobileNav.addEventListener("click", toggleNav);
    
        return () => {
          mobileNav.removeEventListener("click", toggleNav);
        };
      }, []);
  
    return (
      <header className="header">


          <nav>
      <div className="logo">
      <img src={logo} alt="Company Logo" className="logo" />
      <h1>KIFAAX MEDICAL<br />EQUIPMENTS &<br /><span>SOLUTIONS</span></h1>
      </div>
      <ul>
        <li>
          <a href="#aboutus">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact-us">Contact us</a>
        </li>
      </ul>
      <div className="hamburger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
    <div className="menubar">
      <ul>
        <li>
          <a href="#aboutus">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
      </header>
    );
  };
  
  export default Header;