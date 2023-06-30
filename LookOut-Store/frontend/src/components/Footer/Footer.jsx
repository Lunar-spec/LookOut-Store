import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='footer' data-aos="fade-up">
          <div className="top">
              <div className="item">
                  <h1>Categories:</h1>
                  <Link to={'/products/1'} style={{textDecoration: 'none'}}>
                  <span>Women</span>
                  </Link>
                  <Link to={'/products/2'} style={{textDecoration: 'none'}}>
                  <span>Men</span>
                  </Link>
                  <Link to={'/subcategories/4'} style={{textDecoration: 'none'}}>
                  <span>Shoes</span>
                  </Link>
                  <Link to={'/subcategories/5'} style={{textDecoration: 'none'}}>
                  <span>Accessories</span>
                  </Link>
                  <Link to={'/products/5'} style={{textDecoration: 'none'}}>
                  <span>New Arrivals</span>
                  </Link>
                  
              </div>
              <div className="item">
                  <h1>Links:</h1>
                  <Link to={'/contactUs'} style={{textDecoration: 'none'}}>
                  <span>Feedback</span>
                  </Link>
                  <Link to={'/about'} style={{textDecoration: 'none'}}>
                  <span>About</span>
                  </Link>
              </div>
              <div className="item">
                  <h1>About:</h1>
                  <span>
                    LookOut Store embodies a simple philosophy of consistent styling, modern quality clothes that fit well and are easy to wear. We aren't about throw-away fashion but those utility pieces that every woman's wardrobe needs. A great pair of pants, an easy tunic or a luxurious piece of knitwear.
                  </span>
              </div>
              <div className="item">
                  <h1>Contact:</h1>
                  <span>
                    <ul className="contact-info">
                        <li><span className="info-label">Address:</span>123 Main St., Anytown, CA, 90210</li>
                        <li><span className="info-label">Phone:</span> (555) 123456789</li>
                        <li><span className="info-label">Email:</span> info@lookoutstore.com</li>
                    </ul>
                  </span>
              </div>
          </div>
          <div className="bottom">
              <div className="left">
                  <span className="logo">LookOut Store</span>
                  <LocalOfferIcon className='logo' fontSize='24'/>
                  <span className="copyright">© Copyright 2023. All Rights Reserved</span>
              </div>
              <div className="right">
                  {/* <img src="/img/payment.png" alt="" /> */}
                    <div className="social-links">
                      <a href="https://www.facebook.com"><FaFacebookF /></a>
                      <a href="https://www.twitter.com"><FaTwitter /></a>
                      <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                      <a href="https://www.github.com"><FaGithub /></a>
                    </div>
              </div>
          </div>
    </div>
  )
}

export default Footer