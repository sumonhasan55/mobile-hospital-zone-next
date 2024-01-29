"use clientnp"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Cart = ({ cartItems, onRemoveItem,clearCart }) => {
  const [quantities, setQuantities] = useState([]);

  // Initialize quantities when cartItems change
  useEffect(() => {
    setQuantities(cartItems?.map(() => 1));
  }, [cartItems]);

  const updateQuantity = (index, amount) => {
    const newQuantities = [...quantities];
    newQuantities[index] += amount;
    if (newQuantities[index] < 1) {
      newQuantities[index] = 1; // Prevent quantity from going below 1
    }
    setQuantities(newQuantities);
  };

  const calculateTotal = (item, index) => {
    return item.price * quantities[index];
  };

  const calculateCartTotal = () => {
    return cartItems?.reduce((total, item, index) => {
      return total + calculateTotal(item, index);
    }, 0);
  };

  const handleCheckout = () => {
    if (cartItems?.length === 0) {
      alert('Your cart is empty!! Please add a service.');
    } else {
      alert(`Thank You! Successfully You Get This Service! Total Cart Amount: $${calculateCartTotal()}`);
      clearCart();
      window.location.href = '/'; 
    }
  };

  return (
    <div className=" mx-auto lg:p-8 overflow-x-auto min-h-screenm ml-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      <table className='mx-auto table'>
        <thead>
          <tr>
            <th className='mx-5'>Description</th>
            <th className=''>Price</th>
            <th className='mx-5'>Quantity</th>
            <th className='mx-5'>Total</th>
            <th className='mx-5'>Action</th>
          </tr>
        </thead>
        {cartItems?.length === 0 ? (
          <p className='text-center text-red-500 pl-10'>Your cart is empty.</p>
        ) : (
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td className="quantity">
                  <button onClick={() => updateQuantity(index, -1)}>-</button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => updateQuantity(index, 1)}>+</button>
                </td>
                <td className="total">${calculateTotal(item, index)}</td>
                <td>
                  <button onClick={() => onRemoveItem(item)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <div className='flex justify-end my-3 mx-20'>
        <p className='font-semibold'>Total Cart Amount: ${calculateCartTotal()}</p>
      </div>
      <div className="action-buttons lg:mx-20 flex justify-end">
        <div>
          <Link href="/">
            <button className='bg-green-500 px-2 rounded-xl text-xl italic my-2 text-white p-2' onClick={() => alert('Thank You For Continue Your Shopping ')}>Continue Shopping</button>
          </Link>
        </div>
        <div>
          <button className='bg-primary px-2 rounded-xl text-xl italic my-2 mx-3 text-white p-2' onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
