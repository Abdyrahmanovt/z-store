import React, {useEffect, useState} from 'react';
import CardItem from "./CardItem";
import axios from "axios";
import './style.css';


const Sale = () => {
    const [products, setProducts] = useState([])
    const [showMore, setShowMore] = useState(false)

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
                                        <CardItem item={item}/>
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className='btn-more'>
                        <button type="button" onClick={() => setShowMore(!showMore)}>
                            Еще
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;




