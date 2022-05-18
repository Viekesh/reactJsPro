import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

reportWebVitals();







// FoodDeliveryApp :

// import { StateProvider } from './Projects/FoodDeliveryApp/Components/Main/StateProvider';
// import reducer, { initialState } from './Projects/FoodDeliveryApp/Components/Main/Reducer';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </BrowserRouter>
// );