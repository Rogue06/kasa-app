// src/pages/FicheLogement.jsx
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import data from '/data/annonces.json';
import '../styles/FicheLogement.scss';

function FicheLogement() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);

    if (!logement) {
        // Redirection vers 404 si le logement n'existe pas
        return <Navigate to="/404" />;
    }

    return (
        <div className="fiche-logement">
            <Slideshow pictures={logement.pictures} />
            {/* Autres informations du logement à venir */}
        </div>
    );
}

export default FicheLogement;
