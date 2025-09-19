import './navbar.scss'
import { useNavigate } from "react-router-dom";

function Navbar({ isOpen, onToggle }) {
  const navigate = useNavigate();

  function handleNavigate(path){
    navigate(path);
    // On mobile, close menu after navigation
    if (window.innerWidth <= 768 && onToggle) {
      onToggle();
    }
  }
  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav-header">
        <button className="hamburger" onClick={onToggle}>
          ☰
        </button>
        <div className="nav-brand">
          <button className='brand-link' onClick={() => {handleNavigate('/');}}>
            <span className="brand-full">Fabian.dev</span>
          </button>
        </div>
      </div>
      <div className="links-container">
        <button className='link' onClick={() => {handleNavigate('/');}} value={'test'}>
            <span className="link-icon">🏠</span>
            <span className="link-text">Home</span>
        </button>
        <button className='link' onClick={() => {handleNavigate('/about_me');}}>
            <span className="link-icon">👤</span>
            <span className="link-text">About</span>
        </button>
        <button className='link' onClick={() => {handleNavigate('/ml_projects');}}>
            <span className="link-icon">🤖</span>
            <span className="link-text">ML Projects</span>
        </button>
        <button className='link' onClick={() => {handleNavigate('/game');}}>
            <span className="link-icon">🎮</span>
            <span className="link-text">Projects</span>
        </button>
        <button className='link' onClick={() => {handleNavigate('/dashboard');}}>
            <span className="link-icon">📊</span>
            <span className="link-text">Analytics</span>
        </button>
      </div>
    </div>
    );
  }
   
  export default Navbar;