import React, {useEffect, useState} from 'react';
import './style.css'
import weu1 from './Bgz6WeuuAgs.png'
import weu2 from './Bgz6WeuuAgs (1).png'
import weu3 from './Bgz6WeuuAgs (2).png'
import axios from "axios";

const About = () => {
    const [about, setAbout] = useState({})
    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/zzeon`)
            .then(({data}) => {
                setAbout(data[0].about)

            })
    }, [])
    return (
        <div className='container'>
            <div className="row d-flex align-items-center ">
                <div className="col-lg-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-6 ">
                            <img src={about.img1} alt="" className='about-img'/>
                            <img src={about.img2} alt="" className='about-img'/>
                        </div>
                        <div className="col-6">
                            <img src={about.img3} alt="" className='about-img'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right about-block">
                        <div className="right__title">{about.title}</div>
                        <div className="right__desc">
                            {about.desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;