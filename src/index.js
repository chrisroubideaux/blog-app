import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ContextProvider } from "./context/Context";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ContextProvider>
  <ParallaxProvider>
  <BrowserRouter> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ParallaxProvider>
  </ContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();