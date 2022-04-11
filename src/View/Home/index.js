import React from 'react';
import elis from './elis.jpg'
import Sale from "../Sale";
import './style..css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper';

const Home = () => {

    return (
        <div className='container'>
            <div className="hero">

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1}
                    autoplay={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide><img src={elis} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={elis} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={elis} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={elis} alt=""/></SwiperSlide>
                </Swiper>

                <Sale/>
                {/*<NewProducts/>*/}
                {/*<Collecting/>*/}
                {/*<Advantage/>*/}
            </div>
        </div>
    );
};

export default Home;


// <img src={hero} alt=""/>


