import React from 'react';
import CartCard from './CartCard';
import EmplyCart from './EmplyCart';

const Cart = ({ cart, setCart }) => {

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = ()=> {
        setCart([])
    }

    return (
        <div className='mt-20 space-y-6 container mx-auto'>
            <h3 className='text-4xl px-2 font-bold mb-10'>
                Your Cart
            </h3>


            {
                cart.length > 0 ?
                    cart.map(item => <CartCard cart={cart} setCart={setCart} item={item} key={item.id}></CartCard>) :
                    <EmplyCart></EmplyCart>
            }
            <div className='flex items-center justify-between'>
                <span className='font-bold text-xl'>Total</span>
                <span className='text-xl font-bold'>{totalPrice}$</span>
            </div>
            <button onClick={handlePayment} className='btn w-full rounded-full btn-primary'>Proceed tp Checkout</button>
        </div>
    );
};

export default Cart;
