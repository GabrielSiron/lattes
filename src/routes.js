import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const RoutesElement = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home/> }  path="/" exact />
                <Route element = { <Signup/> }  path="/signup" />
                <Route element = { <Login/> }  path="/login" />
           </Routes>
       </BrowserRouter>
   )
}

export default RoutesElement;