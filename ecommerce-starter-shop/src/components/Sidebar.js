import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
const {isOpen, handleClose} = useContext(SidebarContext);
const {cart, clearCart, total, itemAmount} = useContext(CartContext);
console.log(useContext(CartContext));
  return (
  <div className={`${isOpen ? 'right-0' : '-right-full' } w-full bg-white fixed top-0 h-full shadow-2xl 
  md:w-[25vw] xl:max-w-[25vw] transition-all duration-300 z-20 px-4 
  lg:px-[35px`}>
    <br /><br /><br /><br />
    <div className='flex items-center justify-between '>
    <div className='uppercase text-xl booo font-semibold '>Shopping Bag ({itemAmount})</div>
      <div onClick={handleClose} className='cursor-pointer me-5 w-10 h-8 flex justify-center items-center'>
        <IoMdArrowForward  size={60}/>
        
      </div>
    </div>

  <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] 
  overflow-y-auto overflow-x-hidden border-b'>
    {cart.map((item) => {
    return <CartItem item={item} key={item.id} />
  })}
  </div>  
  <div className=' flex flex-col gap-y-3 py-4 mt-2'>
    <div className='flex w-full justify-between items-center'>
      {}
      <div className='uppercase font-semibold'>
        <span className='mr-2 '>&nbsp; &nbsp;Total: </span>$ {parseFloat(total).toFixed(2)}
      </div>
      <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white
       w-12 h-12 flex justify-center items-center text-xl'>
        <FiTrash2 size={20} />
      </div>
      <button className='uppercase font-semibold bg-primary py-2 px-8 text-white'>
        <span className='mr-2 '>Checkout &nbsp; &rarr;</span>
      </button>
      {}
      
    </div>
  </div>
  </div>
  );
};

export default Sidebar;
