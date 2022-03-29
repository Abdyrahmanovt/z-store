import React from 'react';
import rectangle from "../../Sale/CardItem/Rectangle 491 (1).png";
import './style.css'

const NewCard = () => {
    return (
        <div className='newCard'>
            <h3 className="newCard__title">Новинки</h3>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-card">
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
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-card">
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
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-card">
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
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-card">
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
                </div>
            </div>
        </div>
    );
};

export default NewCard;