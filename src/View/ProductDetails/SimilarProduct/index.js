import React from 'react';
import './style.css'
import similarImg from './similarImg.png'

const SimilarProduct = () => {
    return (
        <div className='similar'>
            <div className="similar__box">
                <div className="box__img">
                    <img src={similarImg} alt="" className='similar__img'/>
                    <div className='sale-number'>
                        <div className="similar__rebate">
                                <p className="rebate_number">50%</p>
                        </div>
                    </div>

                </div>
                <div className="box__body">
                    <p className="similar__price">12 000 р<span>12 000 р</span></p>
                    <p className="similar__title">The Organic Cotton Clothes </p>
                    <p className="similar__size">Размер: <span>46-56</span></p>
                    <div className="colors">
                        <span className="colors__circle grey"></span>
                        <span className="colors__circle green"></span>
                        <span className="colors__circle blue"></span>
                        <span className="colors__circle brown"></span>
                        <span className="colors__circle purple"></span>
                        <span className="colors__circle white"></span>
                        <span className="colors__circle red"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimilarProduct;