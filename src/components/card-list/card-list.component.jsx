import { Component } from "react";
import './card-list.styles.css';

// Single Responsibility: display list of monsters:
class CardList extends Component {
  render() {
    const {monsters} = this.props;

    return (
      <div className="card-list">
        { monsters.map((monster) => {
          const { name, id, email} = monster;
          // Anytime when you use the map() function inside of render, or when you have a list of the same looking jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
          return (
            <div key={id} className="card-container">
              <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default CardList;
