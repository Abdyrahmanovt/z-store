import React from 'react';
import {Link} from "react-router-dom";
import './style.css'
// import collectingImg from './collecting.png'



const CollectingCard = ({item}) => {

    return (
       <div className="container">
               <div className='collectingItem'>
                   <img src={item.image} alt="" className="collectingItem__img"/>
                   <h2 className="collectingItem__title">{item.title}</h2>
                   <Link to='/collectionsPage' className="collectingItem__body">
                       <div><h2 className="collectingItem__subtitle">Смотреть все</h2></div>
                       <div><i className="fa-solid fa-angle-right"/></div>
                   </Link>
               </div>
       </div>
    );
};

export default CollectingCard;