import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({ item, cart, setCart }) => {
    const hanldleDelete = (item) => {
        const filterArray = cart.filter(i => i.name !== item.name);
        setCart(filterArray);
        toast.success(`${item.name} Removed`)
    }
    return (
        <div>
            <ul className="list bg-base-100  border rounded-box shadow-md">

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src={item.icon} /></div>
                    <div>
                        <div className='text-xl font-bold'>{item.name}</div>
                        <div className="text-xs font-bold uppercase  opacity-80">{item.price}$</div>
                    </div>

                    <button onClick={()=> hanldleDelete(item)} className="btn btn-soft btn-error">
                        Remove
                    </button>
                </li>


            </ul>
        </div>
    );
};

export default CartCard;