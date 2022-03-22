import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
           <div className='nav'>
               <div className="nav__menu">
                <Link className="nav__link" to='/about'>О нас</Link>
                <Link className="nav__link" to='/collections'>Коллекции</Link>
                <Link className="nav__link" to='/news'>Новости</Link>
               </div>
               <p className="header-contact">Тел: <span>+996 000 00 00 00</span></p>
           </div>
        </div>
    );
};

export default Header;