import React from 'react';
import {Link} from "react-router-dom";
import './style.css'
import collectingImg from './collecting.png'


const CollectingCard = () => {
    return (
        <div className="container">
            <Link to='/collectionsPage'>
                <div className='collectingItem'>
                    <img src={collectingImg} alt="" className="collectingItem__img"/>
                    <h2 className="collectingItem__title">Повседневная одежда</h2>
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