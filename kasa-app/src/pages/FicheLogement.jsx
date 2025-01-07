// src/pages/FicheLogement.jsx
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
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
            
            <div className="logement-content">
                <div className="logement-primary-info">
                    <div className="logement-title">
                        <h1>{logement.title}</h1>
                        <p className="location">{logement.location}</p>
                        <div className="tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="host-rating">
                        <div className="host">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <i 
                                    key={num}
                                    className={`fas fa-star ${
                                        num <= parseInt(logement.rating) ? 'active' : ''
                                    }`}
                                ></i>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="logement-details">
                    <Collapse 
                        title="Description"
                        content={logement.description}
                    />
                    <Collapse 
                        title="Équipements"
                        content={
                            <ul>
                                {logement.equipments.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default FicheLogement;
