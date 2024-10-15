import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const MiniProject5 = () => {
  return (
    <Router>
        <div className='App'>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </div>
    </Router>
  )
}

export default MiniProject5;
