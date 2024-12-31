// src/pages/Home.jsx
import data from '/data/annonces.json'
import Card from '../components/Card'
import bannerImage from '../assets/Image_Banner.png'

import '../styles/Home.scss'

function Home() {
    return (
        <div className="home-container">
            <div className="banner">
                <img src={bannerImage} alt="Paysage côtier" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div className="cards-container">
                {data.map((logement)=> (
                    <Card
                    key={logement.id} 
                    id={logement.id} 
                    title={logement.title} 
                    cover={logement.cover} 
                    /> 
                ))}
            </div>
        </div>
    );
}

export default Home;