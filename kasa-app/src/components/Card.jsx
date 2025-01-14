// src/components/Card.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Card.scss';

function Card({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card