import React from 'react';
import helpImg from './helpImg.png'
import './style.css'

const Help = () => {
    return (
        <div className='container'>
            <div className="help">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={helpImg} alt="" className='help__img'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3 className="help__title">
                            Помощь
                        </h3>
                       <div className="help__dropdown">
                           <select>
                               <option value="" className='help__'>Как я могу заказать одежду?</option>
                               <option value="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
                                   explicabo incidunt voluptas voluptatem. Itaque nobis odit quas quia soluta, velit?
                               </option>
                           </select>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;