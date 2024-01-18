// components/ShoppingCart.js

import React from 'react';

const ShoppingCart = () => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product 1</td>
                            <td>$20.00</td>
                            <td class="quantity">
                                <button onclick="updateQuantity(this, -1)">-</button>
                                <span>1</span>
                                <button onclick="updateQuantity(this, 1)">+</button>
                            </td>
                            <td class="total">$20.00</td>
                            <td><button onclick="removeItem(this)">Remove</button></td>
                        </tr>

                    </tbody>
                </table>
                <div className="action-buttons">
                    <button onClick={() => alert('Continue Shopping button clicked')}>Continue Shopping</button>
                    <button onClick={() => alert('Checkout button clicked')}>Checkout</button>
                </div>

            </>
        </div>
    );
};

export default ShoppingCart;
