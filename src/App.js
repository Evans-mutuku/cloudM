import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/StaticPages/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
