import React from 'react';
import Layout from "./Component/Layout";
import {Route, Routes} from "react-router-dom";
import News from "./View/News";
import About from "./View/About";
import Home from "./View/Home";
import Collections from "./View/Collections";

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
                    </Routes>
                </div>
            </Layout>
        </div>
    );
};

export default App;
