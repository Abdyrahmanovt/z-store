import React from 'react';
import hero from './hero.png'
import './style..css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper';
import NewProducts from "../NewProducts";
import Collecting from "../Collecting";
import HitProduct from "../HitProduct";

const Home = () => {

    return (
        <div className='container'>
            <div className="hero">

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1}
                    autoplay={true}
                    pagination={{clickable: true }}
                    >
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={hero} alt=""/></SwiperSlide>
                </Swiper>

                <HitProduct/>
                <NewProducts/>
                <Collecting/>
                {/*<Advantage/>*/}
            </div>
        </div>
    );
};

export default Home;



// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log('slide change')}>


