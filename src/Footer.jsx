import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-section">
            <h2>Contact us</h2>
            <p>Email: <a href="mailto:info@kifaaxme.com">info@kifaaxme.com</a></p>
            <p>Phone: +252771233986</p>
        </div>
        <div className="footer-section">
            <h2>Location</h2>
            <ul className="social-icons">
                <p>
                Tawhiid Building Taleeh, Hodan District <br />Mogadishu, Somalia 
                </p>

            </ul>
        </div>
        <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#aboutus">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact-us">Contact us</a></li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 <strong>Kifaax Medical Equipments& Solutions</strong>. All rights reserved.</p>
    </div>
</footer>
  );
}

export default Footer