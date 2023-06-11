import Navbar from './js/navbar';
import './App.scss';
import Home from './js/home';
import AboutMe from './js/about_me';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './js/footer';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about_me' element={<AboutMe/>}></Route>
          </Routes>
        </Router>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
