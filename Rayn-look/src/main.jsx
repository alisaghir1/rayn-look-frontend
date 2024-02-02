import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import 'typeface-playfair-display';
//styled component

//provider for redux
import { Provider } from 'react-redux';
import store from './Redux/Store.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
 </Provider>
  </React.StrictMode>
)
