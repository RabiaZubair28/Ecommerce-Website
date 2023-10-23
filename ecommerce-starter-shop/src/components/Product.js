import React, { useContext } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';
import {BsPlus, BsEyeFill} from 'react-icons/bs';
import userEvent from '@testing-library/user-event';

const Product = ({product}) => {
 
  const { addToCart } = useContext(CartContext);
  const { id, image, description, category, title, price} = product;
  return ( 
  <div>
    <div className='pro border border-[#e4e4e4] product'>
    <div className='  h-[200px] m-2 relative overflow-hidden group transition'>
    <div className='w-full h-full flex justify-center items-center'>
    {}
    
      <div className='w-[200px] mx-auto flex justify-center items-center'>
        <img 
        className='max-h-[190px] group-hover: scale-110 transition duration-300' src={image} alt='' />
      </div>
    </div>

    <div className='absolute top-1 right-6 group-hover:right-2 p-2 flex flex-col 
    items-center justify-center  opacity-0 group-hover:opacity-100 transition-all
    duration-300'>
      <button onClick={() => addToCart(product, id)}>
        <div className='flex justify-center items-center text-white eye bg-red-500'>
          <BsPlus className='text-3xl' />
        </div>
      </button>
      <Link
      to={`/product/${id}`}
      className='dot mt-2 bg-white flex justify-center items-center text-primary drop-shadow-xl'
      >
        <BsEyeFill />
      </Link>
    </div>
  </div>
  {}
  <div> 
    <div className=' text-center mt-4 '>
    <Link to={`/product/${id}`}>
      <h5 className=' pb-0 font-semibold product-title'>{title.length > 20 ? title.substring(0, 20).concat(''): title}</h5>
    </Link>
    <div className=' pt-0 product-category text-gray-500 '>{category}</div>
    
    <div className='mb-5 starry'>
    <FaStar color={'orange'} size={30} className='star'/>
    <FaStar color={'orange'} size={30} className='star'/>
    <FaStar color={'orange'} size={30} className='star'/>
    <FaStar color={'orange'} size={30} className='star'/>
    <FaStar color={'orange'} size={30} className='star'/>
    </div>
    <div className='product-description ml-2 mr-2'>{description.length > 50 ? description.substring(0, 55).concat('...'): description}</div>
    <div className=' product-price font-semibold'>$ {price}</div>
    <br />
  </div>
  </div>
  </div>
  </div>
  );
};

export default Product;
