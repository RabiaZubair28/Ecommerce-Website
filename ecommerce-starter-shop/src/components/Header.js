import React, { useContext, useEffect, useState }from 'react';
import {Link} from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs';

const Header = () =>{
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
    return (

<header 
className={`${isActive ? 'bg-red-400' : 'bg-blue-400'} navbar navbar-expand-xl navbar-dark`} id="navbar">
            <div className="container-fluid " id="header">
              <Link to={'/'} className='stary'>
                <div/>
              </Link>
               <div >
                    <Link to={'/home'}  className="b  mx-sm-0 mx-md-0 mx-lg-3 mx-xl-3 mx-xxl-3 mt-4 mt-xl-0 mt-xxl-0" aria-current="page">Home</Link>
                    <Link to={'/shop'}  className="b mx-sm-0 mx-md-0 mx-lg-3 mx-xl-3 mx-xxl-3">Shop</Link>
                    <Link to={'/blog'}  className="b mx-sm-0 mx-md-0 mx-lg-3 mx-xl-3 mx-xxl-3">Blog</Link>
                    <Link to={'/about'} class="b mx-sm-0 mx-md-0 mx-lg-3 mx-xl-3 mx-xxl-3">About</Link>
                    <Link to={'/contact'}  class="b mx-sm-0 mx-md-0 mx-lg-3 mx-xl-3 mx-xxl-3">Contact</Link>
               
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
              <BsBag className='text-4xl'></BsBag>
              <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px]
              w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
            </div>
          </div>
</header>
    );
}
export default Header;
