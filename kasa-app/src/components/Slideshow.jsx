import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Slideshow.scss';

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Si une seule image, pas besoin de navigation
    if (pictures.length <= 1) {
        return (
            <div className="slideshow">
                <img src={pictures[0]} alt="Logement" />
            </div>
        );
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt={`Logement - Vue ${currentIndex + 1}`} />
            
            <button className="nav-button prev" onClick={goToPrevious}>
                <i className="fas fa-chevron-left"></i>
            </button>
            
            <button className="nav-button next" onClick={goToNext}>
                <i className="fas fa-chevron-right"></i>
            </button>
            
            <div className="slideshow-counter">
                {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    );
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Slideshow; 