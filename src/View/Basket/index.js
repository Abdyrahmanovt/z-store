import React, {useEffect, useState} from 'react';
import './style.css';

const Basket = () => {
    const [prod, setProd] = useState([])
    const [count, setCount] = useState(1)
    useEffect(() => {
        const basket = localStorage.getItem("card")
        setProd(JSON.parse(basket))
    }, [])


    return (
        <div className='container'>
            <div className="basket">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            prod ?
                                prod?.map(item =>
                                    <div className="basket__left mb-2">
                                        <img src={item.image[0]} alt="" className='basket__img'/>
                                        <div>
                                            <h3 className="basket__left-title">
                                                {item.title}
                                            </h3>
                                            <p className="basket__left-size">Размер: <span>{item.size}</span></p>
                                            <p className="basket__left-color">Цвет:
                                                <div className="basket__color-div"> </div>
                                            </p>
                                            <p className="basket__left-price">{item.price} р <span>{item.oldPrice} р</span>
                                            </p>
                                            <div className="basket__btns">
                                                <button className="basket__dec-btn">-</button>
                                                <p className="basket__count">1</p>
                                                <button className="basket__inc-btn">+</button>
                                            </div>
                                        </div>
                                        <button type='button' className="basket__cross">
                                            <i className="fa-light fa-x"> </i>
                                        </button>
                                    </div>
                                ) : null
                        }

                    </div>
                    <div className="col-lg-4">
                        {
                            prod?.map(el =>
                                <div className="basket__order">
                                    <div className="order">
                                        <h4 className="order__title">Сумма заказа</h4>
                                        <p className="order__info">Количество линеек:<span>{el.quantity}</span></p>
                                        <p className="order__info">Количество товаров:<span>20 шт</span></p>
                                        <p className="order__info">Стоимость:<span>{el.price} рублей</span></p>
                                        <p className="order__info">Скидка:<span>125 рублей</span></p>
                                        <div className="basket__line"></div>
                                        <p className="order__info">Итого к оплате:<span>{}</span></p>
                                        <button className="basket__btn">Оформить заказ</button>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;