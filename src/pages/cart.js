import Link from 'next/link';
import React from 'react';


const Cart = ({ cartItems, onRemoveItem }) => {
  //console.log(cartItems)
  return (
    <div className="max-w-full mx-auto p-8 ">

      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      <table className=' mx-auto'>
        <thead>
          <tr>
            <th className=' mx-5'>Description</th>
            <th className=''>Price</th>
            <th className=' mx-5'>Quantity</th>
            <th className=' mx-5'>Total</th>
            <th className=' mx-5'>Action</th>
          </tr>
        </thead>
        {cartItems?.length === 0 ? (
          <p className=' text-center text-red-500'>Your cart is empty.</p>
        ) : (

          <tbody>
            {cartItems?.map((item) => (
              <>


                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td class="quantity">
                    <button onclick="updateQuantity(this, -1)">-</button>
                    <span>1</span>
                    <button onclick="updateQuantity(this, 1)">+</button>
                  </td>
                  <td class="total">{item.price}</td>
                  <td><button onClick={() => onRemoveItem(item)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button></td>
                </tr>



              </>


            ))}
          </tbody>


        )}
        <div className="action-buttons mx-auto">
          <Link href="/"> <button className=' bg-green-500 px-2 rounded-xl text-xl  italic my-2 text-white p-2' onClick={() => alert('Thank You For Continue Your Shopping ')}>Continue Shopping</button></Link>
          {
            cartItems?.length === 0 ? (  <button className=' bg-primary px-2 rounded-xl text-xl  italic my-2 mx-3 text-white p-2' onClick={() => alert('Your cart is empty!!plz added a service!!')}>Checkout</button>) : (<Link href="/">  <button className=' bg-primary px-2 rounded-xl text-xl  italic my-2 mx-3 text-white p-2' onClick={() => alert('Thank You! Sucessfully You Get This Service!')}>Checkout</button></Link>)
          }

        </div>
      </table >

    </div>
  );
};

export default Cart;
