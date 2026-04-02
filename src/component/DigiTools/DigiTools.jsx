import React, { use } from 'react';
import Card from './Card';

const DigiTools = ({ fetchInfo,cart,setCart }) => {
    const data = use(fetchInfo);


    return (
        <div className='mt-20 px-4 grid gap-5 container mx-auto grid-cols-2 sm:grid-cols-3'>


            {
                data.map(info => <Card
                    key={info.id}
                    info={info}
                    cart = {cart}
                    setCart={setCart}
                    
                ></Card>)
            }


        </div>
    );
};

export default DigiTools;