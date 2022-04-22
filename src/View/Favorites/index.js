import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Link} from "react-router-dom";
import axios from "axios";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Favorites = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    console.log(favorite)
    const [prod, setProd] = useState([])
    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/products`)
            .then(({data}) => {
                setProd(data)
            })
    }, [])
    return (
        <div className='favorites'>
            <div className="container">
                <h2 className="faborites__title">Избранное</h2>
                <h4 className="favorites__subtitle">Товаров в избранном: <span>{prod?.length}</span></h4>
                <div className="row">
                    {
                        prod.map(item => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-3" key={item.id}>
                                <div className='card'>
                                    <div>
                                        <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                            slidesPerView={1}
                                            autoplay={true}
                                        >
                                            {
                                                item?.image?.map((elem, idx) => (
                                                    <SwiperSlide key={idx}>
                                                        <div className="card__img"><img src={elem}
                                                                                        className="card__img d-block"
                                                                                        alt="..."/>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                        <div className='card__number'>
                                            <div className="card__rebate">
                                                <p>50%</p>
                                            </div>
                                        </div>
                                        <button type='button' className="card__favorite">
                                            <i className="fa-regular fa-heart heart-btn"/>
                                        </button>
                                        <Link to={`/productinfo/${item.id}`}>
                                            <div className=" card__body">
                                                <h5 className="card__title">{item.title}</h5>
                                                <p className=" card__price">{item.price} p <span>{item.oldPrice} p</span>
                                                </p>
                                                <p className="card__size">Размер: <span>{item.size}</span></p>
                                                <div className="colors">
                                                    <div className="green colors__circle"></div>
                                                    <div className="blue colors__circle"></div>
                                                    <div className="black colors__circle"></div>
                                                    <div className="red colors__circle"></div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorites;






