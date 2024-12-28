// src/pages/Home.jsx
import data from '/data/annonces.json'
import Card from '../components/Card'

function Home() {
    return (
      <div className="home-container">
        <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
        </div>

        <div className="cards-container">
           
            {data.map((logemement)=> (
                <Card
                 key={logemement.id} 
                 id={logemement.id} 
                 title={logemement.title} 
                 cover={logemement.cover} 
                 /> 
            ))}
        </div>
      </div>
    );
  }
  
  export default Home;