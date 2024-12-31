// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/LOGO.png';
import '../styles/Header.scss';

function Header() {
  const location = useLocation();
  
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Accueil
          </Link>
          <Link 
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            À propos
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
