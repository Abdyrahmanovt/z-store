import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Component/Layout";
import News from "./View/News";
import About from "./View/About";
import Home from "./View/Home";
import Collections from "./View/Collections";
import NotFound from "./View/NotFound";
import ProductDetails from "./View/ProductDetails";
import Basket from "./View/Basket";
import Favorites from "./View/Favorites";
import Help from "./View/Help";
import Contract from "./View/Offer";
import ResultSeach from "./View/ResultSearch";
import CollectionPage from "./View/CollectionPage";

const App = () => {
        return (
        <div className="app">
            <Layout>
                <div className="pages">
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/news' element={<News/>}/>
                        <Route exact path='/about' element={<About/>}/>
                        <Route exact path='/collections' element={<Collections/>}/>
                        <Route exact path='/result/:title' element={<ResultSeach/>}/>
                        <Route exact path='/collectionspage/:id' element={<CollectionPage/>}/>
                        <Route exact path='/basket' element={<Basket/>}/>
                        <Route exact path='/help' element={<Help/>}/>
                        <Route exact path='/offer' element={<Contract/>}/>
                        <Route exact path='/favorites' element={<Favorites/>}/>
                        <Route exact path='/productinfo/:id' element={<ProductDetails/>}/>
                        <Route exact path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </Layout>
        </div>
    );
};

export default App;
