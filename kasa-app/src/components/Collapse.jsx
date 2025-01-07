import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className={`collapse-button ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                {title}
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? (
                    <p>{content}</p>
                ) : (
                    content
                )}
            </div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
};

export default Collapse; 