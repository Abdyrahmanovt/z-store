import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import favorites from './Rectangle 491.png'

const Favorites = () => {
    return (
        <div className='favorites'>
            <div className="container">
                <h2 className="faborites__title">Избранное</h2>
                <h4 className="favorites__subtitle">Товаров в избранном: <span>16</span></h4>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                        <div className="favorites__card mb-2">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                slidesPerView={1}
                                autoplay={true}
                            >
                                <SwiperSlide >
                                    <div className="card__img"><img src={favorites} className="card__img d-block" alt="..."/></div>
                                </SwiperSlide>
                            </Swiper>
                            <div className='card__number'>
                                <div className="card__rebate">
                                    <p>50%</p>
                                </div>
                            </div>
                            <button type='button' className="card__favorite">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.4662 22.276C11.6072 22.42 11.7992 22.5 12.0002 22.5C12.2012 22.5 12.3932 22.42 12.5342 22.276L22.1282 12.555C24.6192 10.032 24.6192 5.925 22.1282 3.401C20.9182 2.175 19.3092 1.5 17.5962 1.5C15.8832 1.5 14.2752 2.175 13.0652 3.4L12.0002 4.48L10.9352 3.401C9.72516 2.175 8.11616 1.5 6.40416 1.5C4.69116 1.5 3.08216 2.175 1.87216 3.401C-0.618844 5.925 -0.618844 10.032 1.87216 12.554L11.4662 22.276ZM2.93916 4.454C3.86516 3.517 5.09616 3 6.40316 3C7.71116 3 8.94116 3.517 9.86616 4.455L11.4652 6.075C11.7462 6.36 12.2512 6.36 12.5322 6.075L14.1312 4.454C15.0592 3.517 16.2892 3 17.5962 3C18.9042 3 20.1342 3.517 21.0602 4.454C22.9772 6.397 22.9772 9.558 21.0602 11.502L12.0002 20.683L2.93916 11.501C1.02216 9.559 1.02216 6.397 2.93916 4.454Z"
                                        fill="white"/>
                                </svg>
                            </button>
                            <div className=" card__body">
                                <h5 className="card__title">Вечернее платье</h5>
                                <p className=" card__price">1 365 р</p>
                                <p className="card__size">Размер: <span>42-50</span></p>
                                <div className="colors">
                                    <div className="green colors__circle"></div>
                                    <div className="blue colors__circle"></div>
                                    <div className="black colors__circle"></div>
                                    <div className="red colors__circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;





