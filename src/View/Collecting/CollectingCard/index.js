import React from 'react';
import {Link} from "react-router-dom";
import './style.css'


const CollectingCard = ({item}) => {

    return (
        <div className="container">
            <Link to={`/collectionspage/${item.id}`}>
                <div className='collectingItem'>
                    <img src={item.image} alt="" className="collectingItem__img"/>
                    <div className="collectingItem__title">{item.title}</div>
                    <div className="collectingItem__body">
                        <div><h2 className="collectingItem__subtitle">Смотреть все</h2></div>
                        <div><i className="fa-solid fa-angle-right"/></div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default CollectingCard;