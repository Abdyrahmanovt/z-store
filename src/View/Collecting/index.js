import React, {useEffect, useState} from 'react';
import './style.css';
import CollectingCard from "./CollectingCard";
import axios from "axios";
import  {useParams} from "react-router-dom";

const Collecting = () => {
    const params = useParams()
    const [collection, setCollection] = useState([])

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/collections`)
            .then(({data}) => {
                setCollection(data)
                console.log(data)
            })
    }, [])



    return (
        <div className='collecting'>
            <div className="collecting__body">
                <h4 className="collecting__title">
                    Коллекция
                </h4>
                <div className="row">
                    {
                        collection.map(item => {
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                    <CollectingCard item={item}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Collecting;