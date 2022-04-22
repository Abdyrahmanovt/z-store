import React, {useEffect, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from './logo.png'
import favorites from '../images/Vector (2).png'
import shop from '../images/shopping-bag 1.png'
import Modal from '../Modal'
import './style.css'
import './media.css'
import axios from "axios";


const Header = () => {
    const [head, setHead] = useState({})
    let navigate = useNavigate()
    const [inputValue, setInputValue] = useState("")
    const [open, setOpen] = useState(false)
    const [callModal, setCallModal] = useState(false)

    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/zzeon`)
            .then(({data}) => {
                setHead(data[0].footer)
            })
    }, [])
    const handlerScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const handleSearch = (e) => {
        setInputValue(e.target.value.toLowerCase())

    }
    const enterPress = (e) => {
        if (e.key === "Enter") {
            handleClick()
        }
    }
    const handleClick = () => {
        navigate(`/result/${inputValue}`)
        setInputValue("")
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
                        <p className="header-contact">Тел: <a href="tel:+996709094666">{head.number2}</a></p>
                    </div>
                </div>
                <hr/>
                <div className="header container">
                    <Link to='/'>
                        <img src={logo} alt="" className='header__logo'/>
                    </Link>



                    <div className='header__search'>
                        <input type="text" placeholder='Поиск' onChange={handleSearch} onKeyPress={enterPress}
                               value={inputValue}/>
                        <button onClick={handleClick} type='button' disabled={!inputValue.trim()}>
                            <i className="fa-solid fa-magnifying-glass"/>
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
                    <div className='helper'>
                        <button className="helper__up" onClick={handlerScrollUp}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.3873 12.7214C22.1734 12.4939 21.8267 12.4939 21.6127 12.7214L9.56144 25.5383C9.45837 25.6476 9.40044 25.796 9.40039 25.9508L9.40039 30.8658C9.40039 31.4064 9.40039 31.4495 9.94722 31.4495C10.2327 31.4495 10.1018 31.5125 10.336 31.2783L21.9995 18.8726L33.663 31.2783C34.1437 31.759 33.9752 31.7418 34.4377 31.2793C34.6584 31.0586 34.5986 31.1466 34.5986 30.8658C34.5986 30.5851 34.5986 25.9508 34.5986 25.9508C34.5989 25.7962 34.5414 25.6478 34.4387 25.5383L22.3873 12.7214Z"
                                    fill="#2E2E2C"/>
                            </svg>
                        </button>
                        {
                            callModal ? <Modal modal={setCallModal}/> : null
                        }

                        {
                            !open ? (
                                <button type={"button"} className="helper__message" onClick={() => setOpen(true)}>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.4451 0.333496H4.55621C2.22807 0.333496 0.333984 2.2929 0.333984 4.70131V15.1841C0.333984 17.5925 2.22807 19.5519 4.55621 19.5519H6.2451V24.7933C6.2451 25.1466 6.45072 25.465 6.76612 25.6004C6.87083 25.645 6.98061 25.6668 7.08954 25.6668C7.30952 25.6668 7.52485 25.5782 7.68656 25.4109L13.3502 19.5519H21.4451C23.7732 19.5519 25.6673 17.5925 25.6673 15.1841V4.70131C25.6673 2.2929 23.7732 0.333496 21.4451 0.333496ZM16.5895 10.6646H6.2451C5.77896 10.6646 5.40065 10.4249 5.40065 9.94269C5.40065 9.46048 5.77896 9.22082 6.2451 9.22082H16.5895C17.0557 9.22082 17.434 9.46048 17.434 9.94269C17.434 10.4249 17.0557 10.6646 16.5895 10.6646ZM19.7562 7.1703H6.2451C5.77896 7.1703 5.40065 6.93065 5.40065 6.44844C5.40065 5.96623 5.77896 5.72657 6.2451 5.72657H19.7562C20.2223 5.72657 20.6006 5.96623 20.6006 6.44844C20.6006 6.93065 20.2223 7.1703 19.7562 7.1703Z"
                                            fill="#2E2E2C"/>
                                    </svg>
                                </button>
                            ) : (
                                <div className="helper__call_back">
                                    <a href="https://web.telegram.org/z/">
                                        <div className="telegram">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <rect width="44" height="44" rx="6" fill="#0088CC"/>
                                                <path
                                                    d="M31.1094 13.3368L10.4244 21.3133C9.01269 21.8803 9.02086 22.6678 10.1654 23.0189L15.476 24.6756L27.7634 16.9231C28.3444 16.5696 28.8752 16.7598 28.4389 17.1471L18.4837 26.1316H18.4814L18.4837 26.1328L18.1174 31.6068C18.654 31.6068 18.8909 31.3606 19.1919 31.0701L21.7714 28.5618L27.1369 32.5249C28.1262 33.0698 28.8367 32.7898 29.0829 31.6091L32.605 15.0098C32.9655 13.5643 32.0532 12.9098 31.1094 13.3368Z"
                                                    fill="white"/>
                                            </svg>

                                        </div>
                                    </a>
                                    <a href="https://web.whatsapp.com/">
                                        <div className="whatsapp">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <rect width="44" height="44" rx="6" fill="#25D366"/>
                                                <path
                                                    d="M28.1924 24.8672C27.873 24.7031 26.2822 23.9238 25.9863 23.8184C25.6904 23.707 25.4736 23.6543 25.2598 23.9824C25.043 24.3076 24.4277 25.0313 24.2344 25.251C24.0469 25.4678 23.8564 25.4941 23.5371 25.333C21.6387 24.3838 20.3936 23.6397 19.1426 21.4922C18.8115 20.9209 19.4736 20.9619 20.0918 19.7285C20.1973 19.5117 20.1445 19.3271 20.0625 19.1631C19.9805 18.999 19.3359 17.4111 19.0664 16.7637C18.8057 16.1338 18.5361 16.2217 18.3398 16.21C18.1523 16.1982 17.9385 16.1982 17.7217 16.1982C17.5049 16.1982 17.1563 16.2803 16.8604 16.5996C16.5645 16.9248 15.7295 17.707 15.7295 19.2949C15.7295 20.8828 16.8867 22.4209 17.0449 22.6377C17.209 22.8545 19.3213 26.1123 22.5645 27.5156C24.6152 28.4004 25.418 28.4766 26.4434 28.3242C27.0674 28.2305 28.3535 27.5449 28.6201 26.7861C28.8867 26.0303 28.8867 25.3828 28.8076 25.248C28.7285 25.1045 28.5117 25.0225 28.1924 24.8672Z"
                                                    fill="white"/>
                                                <path
                                                    d="M34.3976 17.2061C33.7355 15.6328 32.7863 14.2207 31.5763 13.0078C30.3664 11.7979 28.9543 10.8457 27.3781 10.1865C25.7668 9.50977 24.0558 9.16699 22.2922 9.16699H22.2336C20.4582 9.17578 18.7384 9.52734 17.1213 10.2188C15.5597 10.8867 14.1593 11.8359 12.9611 13.0459C11.7629 14.2559 10.8224 15.6621 10.172 17.2295C9.49821 18.8525 9.15837 20.5781 9.16716 22.3535C9.17595 24.3867 9.66228 26.4053 10.5734 28.21V32.6631C10.5734 33.4072 11.1769 34.0107 11.9211 34.0107H16.3771C18.1818 34.9219 20.2004 35.4082 22.2336 35.417H22.2951C24.05 35.417 25.7521 35.0772 27.3547 34.4121C28.922 33.7588 30.3312 32.8213 31.5383 31.623C32.7482 30.4248 33.7004 29.0244 34.3654 27.4629C35.0568 25.8457 35.4084 24.126 35.4172 22.3506C35.426 20.5664 35.0802 18.835 34.3976 17.2061ZM29.9709 30.0381C27.9172 32.0713 25.1926 33.1904 22.2922 33.1904H22.2424C20.4758 33.1816 18.7209 32.7422 17.1711 31.916L16.925 31.7842H12.8V27.6592L12.6681 27.4131C11.842 25.8633 11.4025 24.1084 11.3937 22.3418C11.382 19.4209 12.4982 16.6787 14.5461 14.6133C16.591 12.5479 19.3244 11.4053 22.2453 11.3936H22.2951C23.7599 11.3936 25.1808 11.6777 26.5197 12.2402C27.8263 12.7881 28.9982 13.5762 30.006 14.584C31.0109 15.5889 31.8019 16.7637 32.3498 18.0703C32.9181 19.4238 33.2023 20.8594 33.1965 22.3418C33.1789 25.2598 32.0334 27.9932 29.9709 30.0381Z"
                                                    fill="white"/>
                                            </svg>

                                        </div>
                                    </a>

                                    <div onClick={() => setCallModal(true)} className="helper__phone">
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="44" height="44" rx="6" fill="#27AE60"/>
                                            <path
                                                d="M31.442 25.9436C30.9311 25.6924 28.3856 24.4989 27.9121 24.3373C27.4386 24.1668 27.0917 24.0861 26.7495 24.5886C26.4026 25.0867 25.4182 26.1949 25.1088 26.5314C24.8088 26.8635 24.504 26.9038 23.9931 26.6571C20.9554 25.2033 18.963 24.0636 16.9613 20.7748C16.4316 19.8998 17.491 19.9626 18.4802 18.0737C18.6489 17.7416 18.5646 17.459 18.4333 17.2077C18.302 16.9564 17.2707 14.5246 16.8394 13.533C16.4222 12.5683 15.9909 12.7029 15.6769 12.6849C15.3768 12.667 15.0346 12.667 14.6877 12.667C14.3408 12.667 13.783 12.7926 13.3095 13.2817C12.836 13.7797 11.5 14.9777 11.5 17.4096C11.5 19.8415 13.3517 22.1971 13.6048 22.5291C13.8674 22.8612 17.2473 27.8506 22.4367 29.9998C25.7182 31.3548 27.0027 31.4715 28.6434 31.2382C29.6419 31.0946 31.6999 30.0446 32.1265 28.8825C32.553 27.7249 32.553 26.7333 32.4265 26.5269C32.2999 26.3071 31.953 26.1815 31.442 25.9436Z"
                                                fill="white"/>
                                        </svg>

                                    </div>

                                    <div onClick={() => setOpen(false)} className="helper__close_message">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.6512 10.0005L18.9916 2.65978C19.4477 2.2041 19.4477 1.46473 18.9916 1.00905C18.5356 0.552974 17.797 0.552974 17.341 1.00905L10.0005 8.34979L2.6597 1.00905C2.20364 0.552974 1.46509 0.552974 1.00903 1.00905C0.552979 1.46473 0.552979 2.2041 1.00903 2.65978L8.34986 10.0005L1.00903 17.3413C0.552979 17.7969 0.552979 18.5363 1.00903 18.992C1.23706 19.2196 1.53591 19.3337 1.83436 19.3337C2.13282 19.3337 2.43167 19.2196 2.6597 18.9916L10.0005 11.6509L17.341 18.9916C17.569 19.2196 17.8678 19.3337 18.1663 19.3337C18.4647 19.3337 18.7636 19.2196 18.9916 18.9916C19.4477 18.5359 19.4477 17.7966 18.9916 17.3409L11.6512 10.0005Z"
                                                fill="#1D1D1B"/>
                                        </svg>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="header-mobile">
                <div className="hamburger">
                    <i className="fa-solid fa-bars"/>
                </div>
                <Link to='/'><img src={logo} alt="" className='mobile_logo'/></Link>
                <button type='button' className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"/>
                </button>
            </div>
        </>
    );
};

export default Header;
