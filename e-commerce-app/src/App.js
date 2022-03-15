import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LogIn from './Components/SubComponents/LogIn';
import './Components/Styles/CommonStyles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/LogIn' element={<LogIn />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App;
