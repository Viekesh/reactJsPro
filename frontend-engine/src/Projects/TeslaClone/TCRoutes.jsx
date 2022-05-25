import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

const TCRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
            </Routes>
        </div>
    )
}

export default TCRoutes;