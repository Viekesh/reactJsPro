import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attachment_1 from "./Components/Attachment_1";
import Attachment_2 from "./Components/Attachment_2";
import './Components/Styles/Common.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Attachment_1 />}></Route>
          <Route exact path="/Attachment_2" element={<Attachment_2 />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App;