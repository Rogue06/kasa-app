// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

function NotFound() {
    return (
        <div className="error-container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/" className="error-link">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
}

export default NotFound;
  