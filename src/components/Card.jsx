import React, { useState } from 'react';

function Card({ imgURL, prod, prodDet, price, addToCart, removeFromCart}) {
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);  

  const toggleCartStatus = () => {
    setIsInCart(prevState => !prevState);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        toggleCartStatus();
        removeFromCart(prodDet);
        return 0;
      }
    });
  };

  const handleAddToCartClick = () => {
    toggleCartStatus();
    incrementQuantity();
    addToCart(prodDet, price);
  };


  return (
    <div className="card w-[14.7rem] relative mb-2">
      <div className="img-btn-cont w-full h-auto">
        <img className={`rounded-md readOnly ${isInCart && "border-[3px] border-[#c73a0f]"}`} src={imgURL} alt="Product" />
      </div>
      {!isInCart ? (
        <button
          className="group hover:bg-[#c73a0f] hover:text-white text-[#260f08] transition-all cursor-pointer absolute left-1/2 -translate-x-1/2 top-[12.8rem] btn w-[70%] flex items-center justify-center gap-[7px] bg-white border-[#c73a0f] border-[1px] py-[0.52rem] rounded-[1.5rem]"
          onClick={handleAddToCartClick}
        >
          <svg className='text-[#c73a0f] group-hover:text-white transition-all' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="currentColor" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>          <h2 className='text-[13.1px] font-[700] '>Add to Cart</h2>
        </button>
      ) : (
        <div
          className="flex justify-between px-5 cursor-pointer absolute left-1/2 -translate-x-1/2 top-[12.8rem] btn-2 w-[70%] items-center gap-[7px] bg-[#c73a0f] py-[0.52rem] rounded-[1.5rem] flex-row-reverse"
        >
          <div onClick={incrementQuantity} className="hover:bg-white hover:text-[#c73a0f] text-white w-[1.15rem] h-[1.15rem] border-[1.5px] border-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </div>
          <p className="quantity text-white font-medium readOnly">{quantity}</p>
          <div onClick={decrementQuantity} className="hover:bg-white hover:text-[#c73a0f] text-white w-[1.15rem] h-[1.15rem] border-[1.5px] border-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>
          </div>
        </div>
      )}
      <div className="prod-info mt-8 text-left">
        <p className='text-[13.22px] text-gray-500 readOnly'>{prod}</p>
        <h3 className='text-[14.3px] font-bold text-[#260f08] readOnly'>{prodDet}</h3>
        <h3 className='text-[14.3px] font-bold text-[#c73a0f] readOnly'>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
