// src/components/Footer.jsx
import logoWhite from '../assets/LOGO-white.png';
import '../styles/Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <img src={logoWhite} alt="Kasa" className="footer-logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
  