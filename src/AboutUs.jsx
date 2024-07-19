import React from 'react'
import WhatSetsUsApart from './Components/WhatSetUsApart';

const AboutUs = () => {
  return (
    <section className="about-us" id='aboutus'>
    <div className="about-us-content">
      <h2>About Us</h2>
      <p>Welcome to Kifaax, your premier provider of high-quality medical equipment and supplies. Established with a commitment to enhancing healthcare delivery, we strive to be your trusted partner in meeting diverse medical needs.</p>
      <p><strong>Our Mission</strong><br />At Kifaax, our mission is to deliver exceptional value through innovative medical solutions. We aim to empower healthcare professionals and institutions with the tools they need to provide superior patient care.</p>
      <WhatSetsUsApart/>
    </div>
  </section>
  )
}

export default AboutUs