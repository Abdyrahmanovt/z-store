import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css'


const CardItem = ({item}) => {


    return (
        <div className='card'>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="card__img"><img src={item.image} className="card__img d-block" alt="..."/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card__img"><img src={item.image} className="card__img d-block" alt="..."/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card__img"><img src={item.image} className="card__img d-block" alt="..."/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card__img"><img src={item.image} className="card__img d-block" alt="..."/></div>
                    </SwiperSlide>
                    <div className='card__number'>
                        <div className="similar__rebate">
                            <p className="rebate_number">50%</p>
                        </div>
                    </div>
                </Swiper>


                <div className=" card__body">
                    <h5 className="card__title">{item.title}</h5>
                    <p className=" card__price">{item.price} p</p>
                    <p className="card__size">Размер: <span>{item.size}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CardItem;


// <div className="colors">
//     <div className="grey colors__circle"></div>
//     <div className="green colors__circle"></div>
//     <div className="purple colors__circle"></div>
//     <div className="brown colors__circle"></div>
//     <div className="blue colors__circle"></div>
//     <div className="white colors__circle"></div>
//     <div className="black colors__circle"></div>
//     <div className="red colors__circle"></div>
// </div>