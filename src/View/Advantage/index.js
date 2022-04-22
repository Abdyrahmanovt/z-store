import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";

const Advantage = () => {
    const [advantage, setAdvantage] = useState([])
    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/advantage`)
            .then(({data}) => {
                setAdvantage(data)
            })
    }, [])
    return (
        <div className='container'>
            <div className='advantage'>
                <h3 className="advantage__title">Наши преимущества</h3>
                <div className="row">
                    {
                        advantage.map(item=>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <div className="advantage__card">
                                    <img src={item.image} alt="" className="advantage__img"/>
                                    <h3 className="advantage__card_title">
                                        {item.title}
                                    </h3>
                                    <p className="advantage__card_desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Advantage;