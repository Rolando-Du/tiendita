import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };

    const decrease = () => {
        const newValue = count - 1;
        newValue >= initial && setCount(newValue);
    };

    return (
        <div>
            <h1 className= "container-title">Count</h1>
            <h3>Product Counter:<p className="count-product">{count}</p>Product!</h3>
            <h3>Stock: <p className="count-stock">{stock}</p>Products in Stock!</h3>
            <div className= "container-btn">
            <button className="btn-increase" onClick={increase}>Click Me To Add!</button>
            <button className="btn-decrease" onClick={decrease}>Click Me to Quit!</button>
            <button className="btn-add">Add to Cart</button>
            </div>

        </div>
    );
};

export default ItemCount;