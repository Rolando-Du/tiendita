import React from 'react';
import CartWidget from './CartWidget';
import { useState } from 'react';

function NavBar() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    };
    console.log(increase);
    const decrease = () => {
        setCount(count - 1)
    };
    console.log(decrease);

    return (
        <div>
            <CartWidget />
        </div>
        
    );
};

export default NavBar;