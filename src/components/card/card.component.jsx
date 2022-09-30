import './card.styles.css';

const Card = ({monster}) => {
  const { id, name, email } = monster;
    // Anytime when you use the map() function inside of render, or when you have a list of the same looking jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
    return (
      <div className="card-container" key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
}

export default Card;