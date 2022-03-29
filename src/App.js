import React from 'react';
import Layout from "./Component/Layout";
import {Route, Routes} from "react-router-dom";
import News from "./View/News";
import About from "./View/About";
import Home from "./View/Home";
import Collections from "./View/Collections";
import NotFound from "./View/NotFound";
import CollectionPage from "./View/CollectionPage";
import ProductDetails from "./View/ProductDetails";

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
                        <Route exact path='/collectionsPage' element={<CollectionPage/>}/>
                        {/*<Route exact path='/productinfo/:id' element={<ProductDetails/>}/>*/}
                        <Route exact path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </Layout>
        </div>
    );
};

export default App;
