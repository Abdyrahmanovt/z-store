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
            </>
            <div className="header-mobile">

            </div>
        </>
    );
};

export default Header;


// <nav className="navbar navbar-expand-lg navbar-light ">
//     <div className="container-fluid">
//         <Link to='/'>
//             <img src={logo} alt="" className='header__logo'/>
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                 aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//                        data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a className="dropdown-item" href="#">Action</a></li>
//                         <li><a className="dropdown-item" href="#">Another action</a></li>
//                         <li>
//                             <hr className="dropdown-divider"/>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                 </li>
//             </ul>
//             <form className="d-flex">
//                 <input className="form-control me-2" type="search" placeholder="Поиск"
//                        aria-label="Search"/>
//                 <button className="btn btn-outline-success" type="submit">
//                     <i className="fa-solid fa-magnifying-glass"/>
//                 </button>
//             </form>
//             {/*<div className='header__search'>*/}
//             {/*    <input type="text" placeholder=''/>*/}
//             {/*    <button>*/}
//             {/*        <img src={search} alt=""/>*/}
//             {/*    </button>*/}
//             {/*</div>*/}
//         </div>
{/*    </div>*/}
{/*</nav>*/}





// import React from 'react';
// import {Link, NavLink} from "react-router-dom";
// import logo from './logo.png'
// import search from '../images/Vector (1).png'
// import favorites from '../images/Vector (2).png'
// import shop from '../images/shopping-bag 1.png'
// import './style.css'
//
//
// const Header = () => {
//     return (
//         <>
//             <div className=' container'>
//                 <div className='nav'>
//                     <div className="nav__menu">
//                         <NavLink to='/about' className="nav__link">О нас</NavLink>
//                         <NavLink to='/collections' className="nav__link">Коллекции</NavLink>
//                         <NavLink to='/news' className="nav__link">Новости</NavLink>
//                     </div>
//                     <p className="header-contact">Тел: <span>+996 000 00 00 00</span></p>
//                 </div>
//             </div>
//             <>
//                 <hr/>
//                 <div className="header container">
//                     <Link to='/'>
//                         <img src={logo} alt="" className='header__logo'/>
//                     </Link>
//                     <div className='header__search'>
//                         <input type="text" placeholder='Поиск'/>
//                         <button>
//                             <img src={search} alt=""/>
//                         </button>
//                     </div>
//                     <NavLink to='/' className="header__favorites">
//                         <img src={favorites} alt=""/>
//                         <span>Избранное</span>
//                     </NavLink>
//                     <div className="header__line"/>
//                     <NavLink to='/' className='header__basket'>
//                         <img src={shop} alt=""/>
//                         <span>Корзина</span>
//                     </NavLink>
//                 </div>
//             </>
//             <nav className="navbar navbar-expand-lg navbar-light container">
//                 <div className="container-fluid d-flex justify-content-betweet">
//                     <div className='nav'>
//                         <div className="nav__menu">
//                             <NavLink to='/about' className="nav__link">О нас</NavLink>
//                             <NavLink to='/collections' className="nav__link">Коллекции</NavLink>
//                             <NavLink to='/news' className="nav__link">Новости</NavLink>
//                         </div>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item dropdown">
//                                     <p className="header-contact nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Тел: <span>+996 555 00 00 00</span></p>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdown">
//                                         <li><span className="dropdown-item">+996 505 00 00 00</span></li>
//                                         <li><span className="dropdown-item">+996 222 00 00 00</span></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };
//
// export default Header;