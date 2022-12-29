import React from 'react';
import Login from '../../components/form/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LoginG = () => <h1>Login Beach</h1>;

const GuestLayout = () => {
  return (
    <div>
      <h1>This is the Guest Layout Page</h1>
      <LoginG />
    </div>
  );
};

const login = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />} />
      <Route path="/login" element={<LoginG />} />
      <Route index element={<div>Default Page Content</div>} />
    </Routes>
  );
};

export default login;
