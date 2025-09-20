import Navbar from './navbar';
import './App.scss';
import Home from './pages/home';
import AboutMe from './pages/about_me';
import MLProjects from './pages/ml_projects';
import Game from './pages/game';
import Dashboard from './pages/dashboard';
import ErrorBoundary from './ErrorBoundary';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './footer';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  // Set initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsNavbarOpen(!isMobile); // Open on desktop, collapsed on mobile
    };

    // Set initial state
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="app">
      <div className="main">
        <Router>
        <Navbar isOpen={isNavbarOpen} onToggle={toggleNavbar}/>
          <div className={`content ${!isNavbarOpen ? 'navbar-collapsed' : ''}`}>
            <ErrorBoundary>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about_me' element={<AboutMe/>}></Route>
                <Route path='/ml_projects' element={<MLProjects/>}></Route>
                <Route path='/game' element={<Game/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
              </Routes>
            </ErrorBoundary>
          </div>
        </Router>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
