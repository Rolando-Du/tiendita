import React from 'react';
import { useState } from 'react';

function ItemCount({ initial, stock }) {

    const [carrito, setCarrito] = useState(initial);
    const addItemCart = () => {
        if (carrito >= 0 && carrito <= (stock - 1)) {
            setCarrito(carrito + 1)
        }
        console.log(carrito);
    };
    const deleteItemCart = () => {
        if (carrito > 0) {
            setCarrito(carrito - 1);
        }
        console.log(carrito);
    };

    return (
        <div className='ItemCountContainer'>
            <button className="btn-delete" onClick={deleteItemCart}>Takes away ❌​</button>
            <h3 className="ItemCount" >{carrito}</h3>
            <button className="btn-add" onClick={addItemCart}>Add to cart ✅​</button>
        </div>
    )
};

export default ItemCount;