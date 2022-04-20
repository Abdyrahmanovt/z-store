import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import NewCard from "../NewProducts/NewCard";
import './style.css';


const NewProducts = () => {
    const [newProduct, setNewProduct] = useState([])
    const [limit, setLimit] = useState(false)

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/products`)
            .then(({data}) => {
                setNewProduct(data)
                console.log(data)
            })

    }, [])
    const handleClick = () => {
        setLimit(!limit)
    }
    return (
        <div className="container">
            <div className="newProduct">
                <div>
                    <h2 className="newProduct__title">Новинки</h2>
                    <div className="newProduct__collections">
                        <div className="row">
                            {
                                newProduct ?
                                    newProduct.slice(0, limit ? 16 : 8).map(elem => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-card" key={elem.id}>
                                            <NewCard elem={elem}/>
                                        </div>
                                    )) : null
                            }
                        </div>
                        <div className="btn-more">
                            <button type='button' onClick={handleClick}>Еще</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;