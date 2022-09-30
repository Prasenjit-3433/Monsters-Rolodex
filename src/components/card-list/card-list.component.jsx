import Card from "../card/card.component";
import './card-list.styles.css';

// Single Responsibility: display list of monsters:
const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      { monsters.map((monster) => {
        return(
          <Card key={monster.id} monster={monster} /> 
        );
      }) }
    </div>
  );
}

export default CardList;
