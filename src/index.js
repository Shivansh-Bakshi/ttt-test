import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styled-components/global';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Histogram,
  NotFound
} from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/histogram' element={<Histogram />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
  </React.StrictMode>
);

reportWebVitals();
