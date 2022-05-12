import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnderDev from './Components/UnderDev';
import LandingPage from './LandingPage';

const FDRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
                <Route exact path='/underdevelopment' element={<UnderDev />}></Route>
            </Routes>
        </div>
    )
}

export default FDRoutes;