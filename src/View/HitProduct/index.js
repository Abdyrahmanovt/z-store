import React, {useEffect, useState} from 'react';
import CardItem from "./CardItem";
import axios from "axios";
import './style.css';


const HitProduct = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(false)

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/products`)
            .then(({data}) => {
                setProducts(data)
            })
    }, [])

    const bestSellers = products.filter(item => item.isHit === true)

    const handleClick = () => {
        setLimit(!limit)
    }

    return (
        <div className="container">
            <div className='hit'>
                <h2 className='hit__title'>Хит продаж</h2>
                <div className="hit__collections">
                    <div className="row">
                        {
                            products.slice(0, limit ? 16 : 8).map(item => {
                                return (
                                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-card">
                                        <CardItem item={item}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='btn-more'>
                        <button type="button" onClick={handleClick}>Еще</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HitProduct;




