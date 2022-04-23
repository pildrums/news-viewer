import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// axios를 깔아주세요~ 비동기 작업을 쉽게해주는 역할을 해요

// 어제 알려드린 것 BrowserRouter 적용