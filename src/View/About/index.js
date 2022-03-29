import React from 'react';
import './style.css'
import weu1 from './Bgz6WeuuAgs.png'
import weu2 from './Bgz6WeuuAgs (1).png'
import weu3 from './Bgz6WeuuAgs (2).png'

const About = () => {
    return (
        <div className='container'>
            <div className="row d-flex align-items-center ">
                <div className="col-lg-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-6 ">
                            <img src={weu1} alt="" className='about-img'/>
                            <img src={weu2} alt="" className='about-img'/>
                        </div>
                        <div className="col-6">
                            <img src={weu3} alt="" className='about-img'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right about-block">
                        <div className="right__title">О нас</div>
                        <div className="right__desc">
                            У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и
                            дополняется в зависимости от пожеланий клиентов. Женская одежда из наших коллекций – это
                            комфортная, стильная и качественная одежда не только на каждый день, но и для любых ситуаций
                            по доступным ценам.Натуральные материалы, продуманные силуэты, современный дизайн и
                            возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания и
                            чувствовать себя уместно в любой ситуации.Если Вы любите одеваться ярко, модно и
                            оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас
                            большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой
                            взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть
                            элегантно и стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода
                            постоянно диктует нам свои требования и для современной девушки, желающей идти в ногу со
                            временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;