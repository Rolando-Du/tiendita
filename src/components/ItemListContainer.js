import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    const [prdoducts, setProducts] = useState([]);
    console.log(prdoducts, setProducts);

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log("reponse", response);
        const data = await response.json();
        console.log("data", data);
        setProducts(data);

    };

    useEffect(() => {
        getProducts();
    },[]);
    return (
        <div className='itemListContainer'>
            <h3 className='nameEcommerce' ><p className="line anim-typewriter">{props.nameEcommerce}</p></h3>
            <ItemCount stock={15} initial={1} />
            
        </div>
    );
};

export default ItemListContainer;