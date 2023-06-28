import './Card.css';

const Card = ({data}) => {
    return (
        <div className='card'>
            <h1 className='name'>{data.name.english}</h1>
            <img src={data.image.hires} alt="pokemon_img"/>
            <h2 className='type'>{data.type}</h2>
            <h3 className='description'>{data.description}</h3>
        </div>      
    )
}

export default Card;