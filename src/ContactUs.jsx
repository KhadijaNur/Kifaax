// ContactUs.js

import React from 'react';
import contactimage from './assets/image.png'
const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-details">
            <h3>Contact Details</h3>
            <p><strong>Address:</strong> Tawhiid Building Taleeh, Hodan District <br />Mogadishu, Somalia </p>
            <p><strong>Email:</strong> <a href= "mailto:info@kifaaxme.com">info@kifaaxme.com</a> </p>
            <p><strong>Phone:</strong> +252771233986</p>
          </div>
          <div className='contact-image-container'>
            <img className='contactimage' src={contactimage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
