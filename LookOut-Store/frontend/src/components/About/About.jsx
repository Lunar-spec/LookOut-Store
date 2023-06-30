import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-us" data-aos="zoom-out">
      <div className="content">
        <h1>About Us</h1>
              <p>
                Welcome to our clothing website! We are a team of fashion enthusiasts dedicated to providing you with the latest styles and trends in the world of clothing. Our mission is to help you look and feel your best, whether you're dressing for a special occasion or simply updating your wardrobe.
                <br />
                At our website, you will find a wide range of clothing options, from casual wear to formal attire, for men and women of all ages. Our collections are carefully curated to ensure that you have access to the best quality garments at affordable prices.
                <br />
                We are committed to making your shopping experience as seamless and enjoyable as possible. Our user-friendly website allows you to easily browse our collections, select your size, and make your purchase with just a few clicks. We also offer a hassle-free returns policy, so if you're not completely satisfied with your purchase, you can simply return it for a full refund.
                <br />
                Our team takes great pride in providing exceptional customer service. If you have any questions or concerns, our friendly and knowledgeable staff is always here to assist you. We believe that customer satisfaction is the key to our success, and we strive to exceed your expectations in every way.
                <br />
                Thank you for choosing our website for your clothing needs. We hope you enjoy shopping with us and discovering new styles that make you look and feel amazing!
              </p>
              <div className="button">
                <Link to={"/"}><button className='home'>Home Page</button></Link>
                
                <Link to={"/contactUs"} style={{textDecoration: "none"}}><button className='contact'>Contact Us</button></Link>
              </div>
      </div>
    </div>
  );
}

export default About;
