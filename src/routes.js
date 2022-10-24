import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/index";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";

const RoutesElement = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Signup/> }  path="/signup" />
                <Route element = { <Home/> }  path="/" exact />                
                <Route element = { <Login/> }  path="/login" />
           </Routes>
       </BrowserRouter>
   )
}

export default RoutesElement;