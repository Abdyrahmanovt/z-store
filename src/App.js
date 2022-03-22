import React from 'react';
import Layout from "./Component/Layout";
import {Route, Routes} from "react-router-dom";
import News from "./View/News";

const App = () => {
  return (
     <div className="container">
         <div className="app">
             <Layout>
                 <div className="pages">
                     <Routes>
                         <Route path='/news' elements={<News/>}/>
                     </Routes>
                 </div>
             </Layout>
         </div>
     </div>
  );
};

export default App;
