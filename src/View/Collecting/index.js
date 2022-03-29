import React from 'react';
import './style.css'
import collecting from './CollectingCard/collecting.png'
import CardItem from "../Sale/CardItem";
import CollectingCard from "./CollectingCard";

const Collecting = () => {
    return (
        <div className='collecting'>
           <div className="collecting__body">
               <h4 className="collecting__title">
                   Коллекция
               </h4>
             <div className="row">
                 <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                     <CollectingCard/>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                     <CollectingCard/>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                     <CollectingCard/>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6 col-card">
                     <CollectingCard/>
                 </div>
             </div>
           </div>
        </div>
    );
};

export default Collecting;