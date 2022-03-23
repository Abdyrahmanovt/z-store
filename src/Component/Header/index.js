import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from './logo.png'
import search from '../images/Vector (1).png'
import favorites from '../images/Vector (2).png'
import shop from '../images/shopping-bag 1.png'
import './style.css'


const Header = () => {
    return (
        <>
            <div className=' container'>
                <div className='nav'>
                    <div className="nav__menu">
                        <NavLink to='/about' className="nav__link">О нас</NavLink>
                        <NavLink to='/collections' className="nav__link">Коллекции</NavLink>
                        <NavLink to='/news' className="nav__link">Новости</NavLink>
                    </div>
                    <p className="header-contact">Тел: <span>+996 000 00 00 00</span></p>
                </div>
            </div>
            <>
                <hr/>
                <div className="header container">
                    <Link to='/'>
                        <img src={logo} alt="" className='header__logo'/>
                    </Link>
                    <div className='header__search'>
                        <input type="text" placeholder='Поиск'/>
                        <button>
                            <img src={search} alt=""/>
                        </button>
                    </div>
                    <NavLink to='/' className="header__favorites">
                        <img src={favorites} alt=""/>
                        <span>Избранное</span>
                    </NavLink>
                    <div className="header__line"/>
                    <NavLink to='/' className='header__basket'>
                        <img src={shop} alt=""/>
                        <span>Корзина</span>
                    </NavLink>
                </div>
                <hr/>
            </>
        </>
    );
};

export default Header;