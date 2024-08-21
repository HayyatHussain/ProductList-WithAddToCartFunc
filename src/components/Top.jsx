import React, { useState } from 'react';
import Card from './Card';

import waffleImg from '../assets/images/image-waffle-desktop.jpg';
import cremeBruleeImg from '../assets/images/image-creme-brulee-desktop.jpg';
import macaronImg from '../assets/images/image-macaron-desktop.jpg';
import tiramisuImg from '../assets/images/image-tiramisu-desktop.jpg';
import baklavaImg from '../assets/images/image-baklava-desktop.jpg';
import meringueImg from '../assets/images/image-meringue-desktop.jpg';
import cakeImg from '../assets/images/image-cake-desktop.jpg';
import brownieImg from '../assets/images/image-brownie-desktop.jpg';
import pannaCottaImg from '../assets/images/image-panna-cotta-desktop.jpg';
import emptyCartImg from '../assets/images/illustration-empty-cart.svg';
import carbonNeutralImg from '../assets/images/icon-carbon-neutral.svg';

function Top() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (prodDet, price) => {
    setCartItems(prevItems => [...prevItems, { prodDet, price }]);
  };

  const removeFromCart = (prodDet) => {
    setCartItems(prevItems => prevItems.filter(item => item.prodDet !== prodDet));
  };

  const totalItems = cartItems.length;

  return (
    <div className='w-full flex justify-between items-start'>
      <div className="right w-[77%] mr-3">
        <h1 className='text-3xl font-bold mb-8'>Desserts</h1>
        <div className="w-full cards flex flex-wrap gap-6">
          <Card imgURL={waffleImg} prod="Waffle" prodDet="Delicious waffle" price="$5.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={cremeBruleeImg} prod="Creme Brulee" prodDet="Classic dessert" price="$6.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={macaronImg} prod="Macaron" prodDet="French pastry" price="$2.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={tiramisuImg} prod="Tiramisu" prodDet="Coffee-flavored dessert" price="$7.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={baklavaImg} prod="Baklava" prodDet="Sweet pastry" price="$4.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={meringueImg} prod="Meringue" prodDet="Light and crispy" price="$3.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={cakeImg} prod="Cake" prodDet="Variety of flavors" price="$8.00" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={brownieImg} prod="Brownie" prodDet="Chocolatey treat" price="$3.50" addToCart={addToCart} removeFromCart={removeFromCart} />
          <Card imgURL={pannaCottaImg} prod="Panna Cotta" prodDet="Creamy dessert" price="$5.50" addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>
      </div>
      {cartItems.length == 0 ? (
        <div className="cart w-[21rem] h-[14.5rem] rounded-md bg-white py-5 px-5">
          <h2 className='text-[1.2rem] text-[#c73e01] font-bold mb-3'>Your Cart ({totalItems})</h2>
          <div className="flex justify-center mb-4">
            <img className='w-[6.4rem]' src={emptyCartImg} alt="Empty cart" />
          </div>
          <p className='text-center text-[12.5px] text-[#87635A] font-semibold'>Your added items will appear here</p>
      </div>
      ) : (
        <div className="cart-2 w-[21rem] min-h-[16.5rem] rounded-md bg-white py-5 px-5">
          <h2 className='text-[1.2rem] text-[#c73e01] font-bold mb-3'>Your Cart ({totalItems})</h2>
          {cartItems.map((item)=>(
            <div className="flex justify-between items-center w-full border-b-[1px] border-b-gray-200 pb-4 mb-3">
            <div className="right">
              <p className='font-bold text-[14px] text-[#260f08] mb-1'>{item.prodDet}</p>
              <div className="right-text flex justify-between gap-2">
                <p className='text-[#c73e01] text-[13.8px] font-medium mr-2'>1x</p>
                <p className='text-[13.7px] text-gray-500'>@ {item.price}</p>{/**/}
                <p className='text-[13.7px] font-medium text-yellow-800'>$5.50</p>
              </div>
            </div>
            <div onClick={() => removeFromCart(item.prodDet)} className="text-[#CAAFA7] transition-all hover:border-black hover:text-black w-[1.05rem] h-[1.05rem] cursor-pointer border-[1.5px] border-[#CAAFA7] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </div>
          </div>
          ))}
          <div className="order-total flex w-full justify-between items-center my-5">
              <p className='text-[13.5px] text-[#260f08] font-medium'>Order Total</p>
              <p className='font-bold text-xl'>$46.50</p>
            </div>
          <div className="flex justify-center gap-2 bg-[#FCF8F5] items-center h-[2.75rem] px-2  rounded mb-4">
            <img src={carbonNeutralImg} alt="carbon neutral image"/>
          <p className='text-center text-[12.5px] text- font-medium'>This is a <span className="font-bold">carbon-neutral</span> delivery</p>
          </div>
          <div className=" px-2 h-[2.75rem] rounded-3xl flex justify-center bg-[#c73e01] items-center text-white text-sm cursor-pointer">Confirm Order</div>
        </div>
      ) }
      
    </div>
  );
}

export default Top;
