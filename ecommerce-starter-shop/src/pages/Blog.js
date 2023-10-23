import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/fa";
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Blog = () => {

  return (
<div className='mt-5 pt-5'>
<Header />
<br /><br />

<div>
    <div id="page-header" className="blog-header mt-5 pt-5">
    <h2>#Read-More</h2>
    <p>Read all case studies about our products!</p>
   </div>

<div id="blog">
   
    <div class="blog-box">
        <div class="blog-img">
        <div className="paper2"/>
        </div>
        <div class="blog-details">
            <h4>How to Style a Quiff</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat 
                selfies yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>13/04</h1>
    </div>
    <div class="blog-box">
        <div class="blog-img">
        <div className="paper3"/>
        </div>
        <div class="blog-details">
            <h4>Must-Have Skater Girl Items</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat 
                selfies yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>12/01</h1>
    </div>
    <div class="blog-box">
        <div class="blog-img">
        <div className="paper4"/>
        </div>
        <div class="blog-details">
            <h4>Runway-Inspired Trends</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat 
                selfies yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>16/01</h1>
    </div>
    <div class="blog-box">
        <div class="blog-img">
        <div className="paper5"/>
        </div>
        <div class="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat 
                selfies yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>10/03</h1>
    </div>
</div>


<div id="pagination" className="section-p1">
    <div href="#">1</div>
    <div href="#">2</div>
    <div >&rarr;</div>
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


</div>

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

export default Blog;
