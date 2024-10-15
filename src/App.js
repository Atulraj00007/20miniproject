import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MiniProject1 from './Projects/MiniProject1';
import MiniProject2 from './Projects/MiniProject2';
import MiniProject3 from './Projects/MiniProject3';
import MiniProject4 from './Projects/MiniProject4';
import MiniProject5 from './Projects/MiniProject5';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mini-project-1" element={<MiniProject1 />} />
          <Route path="/mini-project-2" element={<MiniProject2 />} />
          <Route path="/mini-project-3" element={<MiniProject3 />} />
          <Route path="/mini-project-4" element={<MiniProject4 />} />
          <Route path="/mini-project-5" element={<MiniProject5 />} />

        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="grid-container">
      <Link to="/mini-project-1" className="grid-item">BMI Calculator</Link>
      <Link to="/mini-project-2" className="grid-item">Counter App</Link>
      <Link to="/mini-project-3" className="grid-item">Simple Interest / Compound Interest Calculator</Link>
      <Link to="/mini-project-4" className="grid-item">Age Calculator</Link>
      <Link to="/mini-project-4" className="grid-item">Login/Signup Page</Link>
    </div>
  );
};

export default App;
