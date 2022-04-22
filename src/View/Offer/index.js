import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";

const Offer = () => {
    const [offer, setOffer] = useState({})

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/zzeon`)
            .then(({data}) => {
                setOffer(data[0].offer)
            })
    }, [])
    return (
        <div className='container'>
            <div className="offer">
                <h3 className="offer__title">
                    {offer.title}
                </h3>
                <div className="offer__box">
                    <p className="offer__desc">
                        {offer.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Offer;