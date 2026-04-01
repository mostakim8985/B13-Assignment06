import React, { use } from 'react';

const DigiTools = ({ fetchInfo }) => {
    const data = use(fetchInfo);


    return (
        <div>
           
            <div>
                {
                    data.map(info => console.log(info.name))
                }
            </div>

        </div>
    );
};

export default DigiTools;