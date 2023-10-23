import React, {useContext} from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
const Shop = () => {


  const { products } = useContext(ProductContext);
  console.log(products);

  const filteredProducts = products.filter(item =>
    {
      return (item.category === "men's clothing" || item.category === "women's clothing");
    });
    console.log(filteredProducts);
  return <div>

    
    
    <section className='py-16 mt-5 pt-5'>
    <Header />
      <br /><br />

    <section id="page-header" className='pt-5 mt-5'>
    
    <h2>#Stay-Home</h2>
    
    <p>Save more with coupons & up to 70% off!</p>
   
    
</section>
<br />
    <div className='section-p1  feature mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]
       max-w-sm mx-auto md:max-w-none md:mx-0'>
        {filteredProducts.map((product) => 
        {
          return (
              <Product product={product} key={product.id} />
          );

        })}
      </div>

    </div>
    </section>

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
};

export default Shop;
