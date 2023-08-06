import './navbar.scss'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleNavigate(path){
    navigate(path);
  }
  return (
    <div className="navbar">
      <div className="links-container">
      <button className='link' onClick={() => {handleNavigate('/');}} value={'test'}>
          Home
      </button>
      <button className='link' onClick={() => {handleNavigate('/about_me');}}>
          About Me
      </button>
      <button className='link' onClick={() => {handleNavigate('/game');}}>
          Game
      </button>
      <button className='link' onClick={() => {handleNavigate('/dashboard');}}>
          Dashboard
      </button>
      </div>
    </div>
    );
  }
   
  export default Navbar;