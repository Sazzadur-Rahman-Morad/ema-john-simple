import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const { cart } = props.cart;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        console.log(product)
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery:</h4>
            <p>Selected Item: {cart.length} </p>
            <p>Total Price: $ {total} </p>
            <p>Total Shipping: {shipping} </p>
            <p>Tax: {tax} </p>
            <p>Grand Total: {grandTotal} </p>

        </div>
    );
};

export default Cart;