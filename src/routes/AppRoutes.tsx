import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormLayout from '../config/layout/FormLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLayout component={Login} />} />
        <Route path="/register" element={<FormLayout component={Register} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
