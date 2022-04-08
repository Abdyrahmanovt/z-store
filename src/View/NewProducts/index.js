// import React, {useEffect, useState} from 'react';
// import CardItem from "../Sale/CardItem";
// import './style.css'
// import {Link} from "react-router-dom";
// import axios from "axios";
//
// const NewProducts = () => {
//     const [newProduct,setNewProduct] = useState([])
//
//     useEffect(()=>{
//         axios(`https://613fef235cb9280017a110a6.mockapi.io/zstore/2`)
//             .then(({data}) =>setNewProduct(data.data))
//
//     },[])
//     return (
//         <div className="container">
//             <div className="newProduct">
//                 {
//                     newProduct.map(el =>{
//                         if(el.isNew === true){
//                             return (
//                                 <div key={el.id}>
//                                     <h2 className="newProduct__title">Новинки</h2>
//                                     <div className="newProduct__collections">
//                                         <div className="row">
//                                             <div className="col-lg-3 col-md-4 col-sm-6 col-card">
//                                                 <Link to='/productinfo'><CardItem el={el}/></Link>
//                                             </div>
//                                             <div className="col-lg-3 col-md-4 col-sm-6 col-card">
//                                                 <Link to='/productinfo'><CardItem el={el}/></Link>
//                                             </div>
//                                             <div className="col-lg-3 col-md-4 col-sm-6 col-card">
//                                                 <Link to='/productinfo'><CardItem el={el}/></Link>
//                                             </div>
//                                             <div className="col-lg-3 col-md-4 col-sm-6 col-card">
//                                                 <Link to='/productinfo'><CardItem el={el}/></Link>
//                                             </div>
//                                             <div className="col-lg-3 col-md-4 col-sm-6 col-card">
//                                                 <Link to='/productinfo'><CardItem el={el}/></Link>
//                                             </div>
//                                             <div className="col-lg-3 col-md-4 col-sm-6 col-card">
//                                                 <Link to='/productinfo'><CardItem el={el}/></Link>
//                                             </div>
//                                         </div>
//                                         <div className="btn-more">
//                                             <button type='button'>Еще</button>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                             )
//                         }
//
//                     })
//                 }
//             </div>
//         </div>
//     );
// };
//
// export default NewProducts;