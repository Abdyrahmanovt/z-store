import React, {useEffect, useState} from 'react';
import './style.css'
import SimilarProduct from "./SimilarProduct";
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = ({item}) => {
    const params = useParams()
    const [clothes, setClothes] = useState({})


    useEffect(() => {
        axios(`https://613fef235cb9280017a110a6.mockapi.io/products/${params.id}`)
            .then(({data}) => {
                setClothes(data)
            })
    }, [])


    return (

        <div className=' container'>
            <div className="details">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            {
                                clothes?.image?.map((item, idx) => (
                                    <div className="col-lg-6 col-md-4 " key={idx}>
                                        <img src={item} alt="" className='details__img'/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="details__box">
                            <h3 className="details__title">Вечернее платье</h3>
                            <p className="details__subtitle"> Артикул: <span>Платье PL984/dakota</span></p>
                            <div className="details__colors">Цвет:
                                <div className="colors">
                                    <span className="colors__circle grey"></span>
                                    <span className="colors__circle green"></span>
                                    <span className="colors__circle blue"></span>
                                    <span className="colors__circle brown"></span>
                                    <span className="colors__circle purple"></span>
                                    <span className="colors__circle white"></span>
                                    <span className="colors__circle red"></span>
                                </div>
                            </div>
                            <p className="details__price">7229 р <span>7229 р</span></p>
                            <p className="details__about-title">О товаре:</p>
                            <p className="details__desc">За последние 35 лет бренд Bonucci из обычного производителя
                                одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого
                                качества и актуального стиля. </p>
                            <div className='details__info'>
                                <div className="details__size">
                                    <p>Размерный ряд: <span>42-50</span></p>
                                    <p>Количество в линейке: <span>5</span></p>
                                </div>
                                <div className="details__composition">
                                    <p>Состав ткани: <span>Полиэстер</span></p>
                                    <p>Материал: <span>Полиэстер</span></p>
                                </div>
                            </div>
                            <div className='details__btns'>
                                <button type='button' className="details__btn-basket">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.7786 16.6945L17.7903 7.09785C17.7495 6.69992 17.4142 6.39746 17.0142 6.39746H4.01034C3.6114 6.39746 3.2764 6.69891 3.23452 7.09578L2.21968 16.6971C2.13593 17.535 2.41526 18.3772 2.98585 19.0078C3.55648 19.638 4.36585 19.9998 5.20667 19.9998H15.8181C16.655 19.9998 17.4569 19.6453 18.0171 19.0266C18.5851 18.4006 18.8626 17.5517 18.7786 16.6945ZM16.8616 17.9787C16.5921 18.2757 16.2215 18.4393 15.8181 18.4393H5.20694C4.80616 18.4393 4.41839 18.2648 4.14296 17.9605C3.86753 17.6562 3.73257 17.2523 3.7721 16.8568L4.71253 7.9582H16.3102L17.2262 16.8511C17.2678 17.2732 17.138 17.6737 16.8616 17.9787Z"
                                            fill="white"/>
                                        <path
                                            d="M10.6433 0C8.17672 0 6.16992 2.00676 6.16992 4.47336V7.17816H7.73039V4.47336C7.73039 2.86711 9.03704 1.56047 10.6433 1.56047C12.2495 1.56047 13.5564 2.86711 13.5564 4.47336V7.17816H15.1166V4.47336C15.1167 2.00676 13.1099 0 10.6433 0Z"
                                            fill="white"/>
                                    </svg>
                                    <span>Добавить в корзину</span>
                                </button>
                                <button className="details__btn-favorites">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.4662 22.276C11.6072 22.42 11.7992 22.5 12.0002 22.5C12.2012 22.5 12.3932 22.42 12.5342 22.276L22.1282 12.555C24.6192 10.032 24.6192 5.925 22.1282 3.401C20.9182 2.175 19.3092 1.5 17.5962 1.5C15.8832 1.5 14.2752 2.175 13.0652 3.4L12.0002 4.48L10.9352 3.401C9.72516 2.175 8.11616 1.5 6.40416 1.5C4.69116 1.5 3.08216 2.175 1.87216 3.401C-0.618844 5.925 -0.618844 10.032 1.87216 12.554L11.4662 22.276ZM2.93916 4.454C3.86516 3.517 5.09616 3 6.40316 3C7.71116 3 8.94116 3.517 9.86616 4.455L11.4652 6.075C11.7462 6.36 12.2512 6.36 12.5322 6.075L14.1312 4.454C15.0592 3.517 16.2892 3 17.5962 3C18.9042 3 20.1342 3.517 21.0602 4.454C22.9772 6.397 22.9772 9.558 21.0602 11.502L12.0002 20.683L2.93916 11.501C1.02216 9.559 1.02216 6.397 2.93916 4.454Z"
                                            fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="details__heading">Похожие товары</h2>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <SimilarProduct/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <SimilarProduct/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <SimilarProduct/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <SimilarProduct/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


// <div className="col-md-12">
//     <div className="row mb-3">
//         <div className="col-md-3">
//             <img src={smallImg} alt=""/>
//         </div>
//         <div className="col-md-3">
//             <img src={smallImg} alt=""/>
//         </div>
//         <div className="col-md-3">
//             <img src={smallImg} alt=""/>
//         </div>
//         <div className="col-md-3">
//             <img src={smallImg} alt=""/>
//         </div>
{/*    </div>*/
}
{/*</div>*/
}
