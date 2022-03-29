import React from 'react';
import CardItem from "./CardItem";
import './style.css'

const Sale = () => {
    return (

        <div className="container">
            <div className='sale'>
                <div>
                    <h2 className='sale__title'>Хит продаж</h2>
                    <div className="sale__collections">
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
                      </div>
                    </div>
                </div>
                <div className='btn-more'>
                    <button type="button" >Еще</button>
                </div>
            </div>
        </div>
    );
};

export default Sale;




