import React from 'react';
import hero from './hero.png'
import './style..css'
import Sale from "../Sale";
import NewProducts from "../NewProducts";
import Collecting from "../Collecting";
import Advantage from "../Advantage";

const Home = () => {
    return (
        <div className='container'>
            <div className="hero">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1">
                        </button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2">
                        </button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3">
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hero} alt=""/>
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={hero} alt=""/>
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={hero} alt=""/>
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Sale/>
                <NewProducts/>
                <Collecting/>
                <Advantage/>
            </div>
        </div>
    );
};

export default Home;



// <img src={hero} alt=""/>


