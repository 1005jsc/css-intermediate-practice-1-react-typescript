import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyle.style';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
