import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const About = () => {

  return (
  
<div className="pt-5 mt-5">
<Header />
<br /><br />
<section id="page-header" className="about-header mt-5 pt-5">
    
    <h2>#Know-Us</h2>
    <p>Elevate Your Personal Style with Us!</p>
</section>

<section id="about-head" class="section-p1">
    <div className='picky'></div>
    <div className='pick'>
        <h2>Who we are?</h2>
        <p>
            We are a vibrant and trendsetting online boutique specializing in fashion-forward 
            clothing and exquisite jewelry. Our passion for style and quality drives us to curate
            a stunning collection of apparel and accessories to elevate your personal style. Explore
            our carefully selected range and indulge in the latest fashion trends.</p>


            <br />Create stunning images with as much or as 
                little control as you like thanks to a choice of Basic and Creative modes.
            
    
    </div>
</section>

<section id="about-app" className="section-p1">
    <h1 >Download Our <a href='#'>App >></a></h1>
</section>
  
  
    



<section id="newsletter" class="section-p1 section-m1">
  <div class="newstext">
    <h4>Sign Up For Newsletter</h4>
    <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
  </div>
  <div class="form">
    <input type="text" placeholder="Your email address" />
    <button class="normal">Sign Up</button>
  </div>
</section>



<div className="footer section-p1">
  <div className="col">
    
    <div className='logu'></div>
    <h4 className='mt-2'>Contact</h4>
    <p><strong>Address: </strong> Kings Crystal Bungalows, Sukkur</p>
    <p><strong>Phone: </strong> +92 88394839</p>
    <p><strong>Hours: </strong> 10:00 - 8:00 pm, Mon - Sat</p>
    
    <h4>Follow us</h4>
    <div className=" follow picy">
      <FaFacebookSquare size={25} />
      <FaTwitterSquare size={25}  />
      <FaInstagramSquare size={25}  />
      <FaPinterestSquare size={25}  />
      <FaYoutube size={25}  />
      </div>
  

  </div >
    
  <div className="col">
    <h4>About</h4>
    <Link to={'#'}>Sign In</Link>
    <Link to={'#'}>View Cart</Link>
    <Link to={'#'}>My Wishlist</Link>
    <Link to={'#'}>Track My Order</Link>
    <Link to={'#'}>Help</Link>
  </div>

  <div className="col">
    <h4>My Account</h4>
    <Link to={'#'}>About Us</Link>
    <Link to={'#'}>Delivery Information</Link>
    <Link to={'#'}>Privacy Policy</Link>
    <Link to={'#'}>Terms & Conditions</Link>
    <Link to={'#'}>Contact Us</Link>
  </div>

  <div className="col install">
    <h4>Install App</h4>
    <p>From App Store or Google Play</p>
    <div>
      <div className='app' />
      <div className='play' />
    </div>
    <p className='payment'>Secured Payment Gateways</p>
    <div className='pay' />
  </div>
  <div className="copyright">
    <p>© 2023, Made By Rabia Zubair - Ecommerce Website</p>
  </div>
</div>
<Sidebar />
</div>
  );
 
};

export default About;