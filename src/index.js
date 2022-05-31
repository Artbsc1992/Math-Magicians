import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/Nav';
import Calculator from './routes/Calculator';
import Home from './routes/Home';
import Quote from './routes/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="Home" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
