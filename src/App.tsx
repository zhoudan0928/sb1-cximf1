import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Order from './components/Order';
import OrderStatus from './components/OrderStatus';
import Feedback from './components/Feedback';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/login" />} />
            <Route path="/order" element={isLoggedIn ? <Order /> : <Navigate to="/login" />} />
            <Route path="/order-status" element={isLoggedIn ? <OrderStatus /> : <Navigate to="/login" />} />
            <Route path="/feedback" element={isLoggedIn ? <Feedback /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/menu" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;