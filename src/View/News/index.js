import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios('https://613fef235cb9280017a110a6.mockapi.io/zzeon')
            .then((data) => {
                setNews(data.data[0].news)
                console.log(data.data[0].news)
            })
    }, [])


    return (
        <div className="container">
            <div className='news'>
                <h3 className="news__title">
                    Новости
                </h3>
                {
                   news ?
                       news?.map((item,index)=>
                           <div className="news__box" key={index} >
                               <img src={item.image} alt="" className="news__img"/>
                               <div className="news__about">
                                   <p className="news__subtitle">
                                       {item.title}
                                   </p>
                                   <p className="news__desc">
                                       {item.desc}
                                   </p>
                               </div>
                           </div>
                       )
                       : null
                }
            </div>
        </div>
    );
};

export default News;




