// import React from 'react'

import { Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginCreate from './LoginCreate';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginPasswordLost />} />
        <Route path="/resetar" element={<LoginPasswordReset />} />
      </Routes>
      Logado
    </div>
  );
};

export default Login;
