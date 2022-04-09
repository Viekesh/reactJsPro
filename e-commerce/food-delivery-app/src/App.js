import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';



class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Routes>
            <Route exact path='/' element={<LandingPage />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;