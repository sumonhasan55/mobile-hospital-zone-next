import React from 'react';


const Cart = ({ cartItems, onRemoveItem }) => {
    console.log(cartItems)
  return (
    <div className="max-w-4xl mx-auto p-8">
        
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {cartItems?.map((item) => (
            <li key={item.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span>{item.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={() => onRemoveItem(item)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
