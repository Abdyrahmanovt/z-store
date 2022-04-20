import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Collections = () => {
    const [coll, setColl] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/collections?=page=${page}`)
            .then(({data}) => {
                setColl(data)
            })
    }, [page])

    const handlePage = (item) => {
        setPage(item)
    }
    return (
        <div className="container">
            <div className='collections'>
                {/*<div className='collections__box'>*/}
                <h3 className="collections__title">Коллекции</h3>
                <div className="row ">
                    {coll ?
                        coll.map(el => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={el.id}>
                                <Link to={`/collectionspage/${el.id}`}>
                                    <div className='collectingItem'>
                                        <img src={el.image} alt="" className="collectingItem__img"/>
                                        <div className="collectingItem__title">{el.title}</div>
                                        <div className="collectingItem__body">
                                            <div><h2 className="collectingItem__subtitle">Смотреть все</h2></div>
                                            <div><i className="fa-solid fa-angle-right"/></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) : null
                    }
                </div>

                <div className="button-group d-flex flex-end">
                    <div className="btn-group btn-str d-flex flex-end " aria-label="First group">
                        {
                            [...Array(2).keys()].map(item => (
                                <button key={item} type={"button"}
                                        className={`my-4 btn btn-outline-secondar mx-1 ${page === item + 1 && 'btn btn-danger'} `}
                                        onClick={() => handlePage(item + 1)}>{item + 1}</button>
                            ))
                        }
                    </div>
                </div>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Collections;

