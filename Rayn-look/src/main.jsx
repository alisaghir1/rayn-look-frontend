
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'typeface-playfair-display';
import { Provider } from 'react-redux';
import store from './Redux/Store.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
 </Provider>,
  </React.StrictMode>,
)
