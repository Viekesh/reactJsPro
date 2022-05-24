import React from 'react';
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";

const NRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
        </Routes>
    )
}

export default NRoutes;