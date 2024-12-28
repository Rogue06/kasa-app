// src/components/Card.jsx
function Card({id, title, cover}) {
    return (
        <article className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </article>
    )
}

export default Card