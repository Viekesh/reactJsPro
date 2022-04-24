import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Components/Index';
import Navigation from './Components/Header/Navigation/Navigation';

const MainPage = () => {
    return (
        <div className='main-page'>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Index />}></Route>
            </Routes>
        </div>
    )
}

export default MainPage;