import React from 'react';
import hero from './hero.png'
import Sale from "../Sale";
import NewProducts from "../NewProducts";
import Collecting from "../Collecting";
import Advantage from "../Advantage";
import './style..css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

const Home = () => {

    return (
        <div className='container'>
            <div className="hero">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
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


