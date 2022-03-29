import React from 'react';
import rectangle from './Rectangle 491 (1).png'
import './style.css'

const CardItem = () => {
    return (
        <div className='card'>
            <img src={rectangle} className="card__img" alt="..."/>
            <div className=" card__body">
                <h5 className="card__title">Вечернее платье</h5>
                <p className=" card__price">1 365 р</p>
                <p className="card__size">Размер: <span>42-50</span></p>
                <div className="colors">
                    <div className="grey colors__circle"></div>
                    <div className="green colors__circle"></div>
                    <div className="purple colors__circle"></div>
                    <div className="brown colors__circle"></div>
                    <div className="blue colors__circle"></div>
                    <div className="white colors__circle"></div>
                    <div className="black colors__circle"></div>
                    <div className="red colors__circle"></div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
