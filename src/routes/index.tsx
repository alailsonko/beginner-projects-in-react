import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BinToDec from '../pages/BinToDec';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/bin-to-dec" element={<BinToDec />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
