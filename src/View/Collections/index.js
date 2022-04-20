import React from 'react';
import CollectingCard from "../Collecting/CollectingCard";
import './style.css'

const Collections = () => {
    return (
        <div className="container">
            <div className='collections'>
                <div className='collections__box'>
                    <h3 className="collections__title">Коллекции</h3>
                    <div className="row ">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <CollectingCard/>
                        </div>
                    </div>
                    <div className="button-group d-flex flex-end">
                        <div className="btn-group btn-str d-flex flex-end " srole="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-secondary "><i
                                className="fa-solid fa-angle-left"/>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">1</button>
                            <button type="button" className="btn btn-outline-secondary">2</button>
                            <button type="button" className="btn btn-outline-secondary">3</button>
                            <button type="button" className="btn btn-outline-secondary">4</button>
                            <button type="button" className="btn btn-outline-secondary">...</button>
                            <button type="button" className="btn btn-outline-secondary">N</button>
                            <button type="button" className="btn btn-outline-secondary"><i
                                className="fa-solid fa-angle-right"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;