import React, {useEffect, useState} from 'react';
import './style.css';
import CollectingCard from "./CollectingCard";
import axios from "axios";
import {useParams} from "react-router-dom";

const Collecting = () => {
    const [collection, setCollection] = useState([])
    const [limit, setLimit] = useState(false)

    const handleClick = () => {
        setLimit(!limit)
    }


    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/collections`)
            .then(({data}) => {
                setCollection(data)
            })
    }, [])

    return (
        <div className='collecting'>
            <div className="collecting__body">
                <h4 className="collecting__title">Коллекция</h4>
                <div className="row">
                    {
                        collection.slice(0, limit ? 8 : 4).map(item =>
                            <div className="col-lg-3 col-md-4 col-sm-6 " key={item.id}>
                                <CollectingCard item={item} />
                            </div>
                        )
                    }
                </div>
                <div className="btn-more">
                    <button type='button' onClick={handleClick}>Еще</button>
                </div>
            </div>
        </div>
    );
};

export default Collecting;