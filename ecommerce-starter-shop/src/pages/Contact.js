import React from 'react';
import {FaComments} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaRegBell} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Contact = () => {

  return (
<div>
<Header />
 <br /> <br /> 
 <section id="page-header" className="about-header mt-5 pt-5">
    
    <h2>#Let's-Talk</h2>
    <p>We love to hear from you!</p>
</section>

<section id="contact-details" className="section-p1">
    <div className="details">
      <br />
        <span className='font1'>GET IN TOUCH</span>
        <h2 className='font2'>Visit one our agency locations or contact us today</h2>
        <h3 className='font3'>Head Office</h3>
        <div>
            <li>
            <FaStore size={22} />
                <p>&nbsp;&nbsp;&nbsp;56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
            <FaRegBell  size={22} />
                <p>&nbsp;&nbsp;&nbsp;contact@example.com</p>
            </li>
            <li>
            <FaRegEnvelope   size={22} />
                <p>&nbsp;&nbsp;&nbsp;contact@example.com</p>
            </li>
            <li>
            <FaComments  size={22}  />
                <p>&nbsp;Monday to Saturday: 9.00am to 16.00pm</p>
            </li>
        </div>
    </div>
    <div class="map">

    </div>
  
</section>

<div id="form-details">
       
    <div className="people">
        <div>
            <div className='people1' />
            <p className='padding'>
                <span>
                    Salman Channa
                </span>
                Senior Marketing Manager <br /> Phone: +921239378 <br /> Email: salman_channa@gmail.com
            </p>
      </div>
        <div>
        <div className='people2' />
            <p className='padding'>
                <span>
                    Owais Khan
                </span>
                Senior Marketing Manager <br /> Phone: +921239834 <br /> Email: owais_raza@gmail.com
            </p>
        </div>
        <div>
        <div className='people3' />
        <p className='padding'>
                <span>
                    Javed Hussain
                </span>
                Senior Marketing Manager <br /> Phone: +921233477 <br /> Email: javed_hussain@gmail.com
            </p>
        </div>
        </div>
    
</div>

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
    <p><strong>Phone: </strong> +92 883 948 39</p>
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
    <div className="row">
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

export default Contact;
