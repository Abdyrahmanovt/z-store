import React from 'react';
import CardItem from "../Sale/CardItem";
import './style.css'

const NewProducts = () => {
    return (
        <div className="container">
            <div className="newProduct">
                <div>
                    <h2 className="newProduct__title">Новинки</h2>
                    <div className="newProduct__collections">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <CardItem/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <CardItem/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <CardItem/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <CardItem/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <CardItem/>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                                <CardItem/>
                            </div>
                        </div>
                        <div className="btn-more">
                            <button type='button'>Еще</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;