import React, {useEffect, useState} from 'react';
import CardItem from "./CardItem";
import axios from "axios";
import './style.css'
import {Link, useLocation} from "react-router-dom";
import Loader from "../../Component/Loader";


const Sale = () => {
    const location = useLocation()
    const [products, setProducts] = useState([])
    console.log(location)

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/products`)
            .then(({data}) => {
                setProducts(data)
            })
    }, [])


    const bestSellers = products.filter(item => item.isHit === true)

    return (
        <div className="container">
            <div className='sale'>
                <h2 className='sale__title'>Хит продаж</h2>
                <div className="sale__collections">
                    <div className="row">
                        {
                            bestSellers.map(item => {
                                return (
                                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-card">
                                        <Link to={`/productinfo/${item.id}`}>
                                            <CardItem item={item}/>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='btn-more'>
                    <button type="button">Еще</button>
                </div>
            </div>
        </div>
    );
};

export default Sale;




