import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Sign';
import Home from './homepage';
import Login from './Login';
import Room from './Room';
import AboutUs from './AboutUs';
import Pages from './Pages';
import Blog from './Blog';
import RoomDetails from './RoomDetails';
import { AuthProvider } from './AuthContext'; 

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/rooms" element={<Room />} />
                    <Route path="/rooms/:id" element={<RoomDetails />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/pages" element={<Pages />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;