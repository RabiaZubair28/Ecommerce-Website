import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Home = () => {

  return (
<div>
<Header />
  <br /><br /><br />
<section id="hero">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <button>Shop Now</button>

</section>

<section id="feature" class="section-p1">
    <div className="fe-box">
    <div className='cut1' />
        <h6>Free Shipping</h6>
    </div>

    <div className="fe-box">
    <div className='cut2' />
        <h6>Online Order</h6>
    </div>

    <div className="fe-box">
    <div className='cut3' />
        <h6>Save Money</h6>
    </div>

    <div className="fe-box">
        <div className='cut4' />
        <h6>Promotions</h6>
    </div>

    <div className="fe-box">
    <div className='cut5' />
        <h6>Happy Sell</h6>
    </div>

    <div class="fe-box">
    <div className='cut6' />
        <h6>F24/7 Support</h6>
    </div>
</section>


<section id="banner" className="section-m1 ">
  <h4 >Repair Services</h4>
  <h2>Up to <span>70% Off</span> - All t-shirts & Accessories</h2>
  <button class="normal">Explore more</button>
</section>

<section className="sm-banner section-p1">
  <div className="banner-box">
    <h4>Crazy deals</h4>
    <h2>buy 1 get 1 free</h2>
    <span>The best classic dress is on sale at Cara</span>
    <button class="white">Learn More</button>
  </div>
  <div className="banner-box2">
    <h4>Spring/Summer</h4>
    <h2>Upcoming Season</h2>
    <span>The best classic dress is on sale at Cara</span>
    <button class="white">Collection</button>
  </div>
</section>

<section id="banner3">
  <div class="banner-box">
    <h2>SEASONAL SALE</h2>
    <h3>Winter Collection - 50% OFF</h3>
  </div>
  <div class="banner-box banner-box2">
    <h2>NEW FOOTWEAR COLLECTION</h2>
    <h3>Spring / Summer 2022</h3>
  </div>
  <div class="banner-box banner-box3">
    <h2>T-SHIRTS</h2>
    <h3>New Trendy Prints</h3>
  </div>
</section>

<section id="newsletter" class="section-p1 section-m1">
  <div class="newstext">
    <h4>Sign Up For Newsletter</h4>
    <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
  </div>
  <div className="form">
    <input className="in" type="text" placeholder="Your email address" />
    <button className="normal">Sign Up</button>
  </div>
</section>

  
<div className="footer section-p1">
  <div className="col">
    
  <div className='logu'></div>
    <h4 className='mt-2'>Contact</h4>
    <p><strong>Address: </strong> Kings Crystal Bungalows, Sukkur</p>
    <p><strong>Phone: </strong> +92 88394839</p>
    <p><strong>Hours: </strong> 10:00 - 8:00 pm, Mon - Sat</p>

    <h4 >Follow us</h4>
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
    <div className="ro">
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

export default Home;
