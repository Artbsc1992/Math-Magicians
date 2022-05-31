import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import './index.css';
import NavBar from './components/Nav';
import Calculator from './routes/Calculator';
import Home from './routes/Home';
import Quote from './routes/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
