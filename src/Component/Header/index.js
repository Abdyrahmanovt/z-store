import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from './logo.png'
import search from '../images/Vector (1).png'
import favorites from '../images/Vector (2).png'
import shop from '../images/shopping-bag 1.png'
import './style.css'
import './media.css'


const Header = () => {
    const handleUp = (e) => {
        <Link to="/"> </Link>
    }
    return (
        <>
            <div className="header-navbar">
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
                <hr/>
                <div>
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
                        <NavLink to='/favorites' className="header__favorites">
                            <img src={favorites} alt=""/>
                            <span>Избранное</span>
                        </NavLink>
                        <div className="header__line"/>
                        <NavLink to='/basket' className='header__basket'>
                            <img src={shop} alt=""/>
                            <span>Корзина</span>
                        </NavLink>
                        <div className='arrow-up' onClick={handleUp}>
                            <button className="header__arrowUp">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.3873 12.7214C22.1734 12.4939 21.8267 12.4939 21.6127 12.7214L9.56144 25.5383C9.45837 25.6476 9.40044 25.796 9.40039 25.9508L9.40039 30.8658C9.40039 31.4064 9.40039 31.4495 9.94722 31.4495C10.2327 31.4495 10.1018 31.5125 10.336 31.2783L21.9995 18.8726L33.663 31.2783C34.1437 31.759 33.9752 31.7418 34.4377 31.2793C34.6584 31.0586 34.5986 31.1466 34.5986 30.8658C34.5986 30.5851 34.5986 25.9508 34.5986 25.9508C34.5989 25.7962 34.5414 25.6478 34.4387 25.5383L22.3873 12.7214Z"
                                        fill="#2E2E2C"/>
                                </svg>
                            </button>
                            <button type='button' className="header__chat">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.4451 0.333496H4.55621C2.22807 0.333496 0.333984 2.2929 0.333984 4.70131V15.1841C0.333984 17.5925 2.22807 19.5519 4.55621 19.5519H6.2451V24.7933C6.2451 25.1466 6.45072 25.465 6.76612 25.6004C6.87083 25.645 6.98061 25.6668 7.08954 25.6668C7.30952 25.6668 7.52485 25.5782 7.68656 25.4109L13.3502 19.5519H21.4451C23.7732 19.5519 25.6673 17.5925 25.6673 15.1841V4.70131C25.6673 2.2929 23.7732 0.333496 21.4451 0.333496ZM16.5895 10.6646H6.2451C5.77896 10.6646 5.40065 10.4249 5.40065 9.94269C5.40065 9.46048 5.77896 9.22082 6.2451 9.22082H16.5895C17.0557 9.22082 17.434 9.46048 17.434 9.94269C17.434 10.4249 17.0557 10.6646 16.5895 10.6646ZM19.7562 7.1703H6.2451C5.77896 7.1703 5.40065 6.93065 5.40065 6.44844C5.40065 5.96623 5.77896 5.72657 6.2451 5.72657H19.7562C20.2223 5.72657 20.6006 5.96623 20.6006 6.44844C20.6006 6.93065 20.2223 7.1703 19.7562 7.1703Z"
                                        fill="#2E2E2C"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mobile">
                <div className="hamburger">
                    <i className="fa-solid fa-bars"/>
                </div>
                <Link to='/'> <img src={logo} alt="" className='mobile_logo'/></Link>
                <button type='button' className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"/>
                </button>
            </div>
        </>
    );
};

export default Header;