// src/components/Card.jsx
import { Link } from 'react-router-dom';
import '../styles/Card.scss';

function Card({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    )
}

export default Card