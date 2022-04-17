import React from 'react';
import './style.css'
import basketImg from './basketImg.jpeg'

const Basket = () => {
    return (
        <div className='container'>
            <div className="basket">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="basket__left">
                            <img src={basketImg} alt="" className='basket__img'/>
                            <div>
                                <h3 className="basket__left-title">
                                    Вечернее платье
                                </h3>
                                <p className="basket__left-size">Размер: <span>42-50</span></p>
                                <p className="basket__left-color">Цвет: <div className="basket__color-div"> </div></p>
                                <p className="basket__left-price">1 365 р <span>2 730 р</span></p>
                           <div className="basket__btns">
                               <button className="basket__dec-btn">-</button>
                               <p className="basket__count">1</p>
                               <button className="basket__inc-btn">+</button>
                           </div>
                            </div>
                        <div className="basket__cross"> </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="basket__order">
                            <div className="order">
                                <h4 className="order__title">Сумма заказа</h4>
                                <p className="order__info">Количество линеек:<span>4 шт</span></p>
                                <p className="order__info">Количество товаров:<span>20 шт</span></p>
                                <p className="order__info">Стоимость:<span>6 825 рублей</span></p>
                                <p className="order__info">Скидка:<span>125 рублей</span></p>
                                <div className="basket__line"></div>
                                <p className="order__info">Итого к оплате:<span>6700 рублей</span></p>
                                <button className="basket__btn">Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;