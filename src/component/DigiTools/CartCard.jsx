import React from 'react';

const CartCard = ({item}) => {
    return (
        <div>
            <ul className="list bg-base-100  border rounded-box shadow-md">
            
                <li className="list-row">
                    <div><img className="size-10 rounded-box" src={item.icon} /></div>
                    <div>
                        <div className='text-xl font-bold'>{item.name}</div>
                        <div className="text-xs font-bold uppercase  opacity-80">{item.price}$</div>
                    </div>
                   
                    <button className="btn btn-soft btn-error">
                        Remove
                    </button>
                </li>


            </ul>
        </div>
    );
};

export default CartCard;