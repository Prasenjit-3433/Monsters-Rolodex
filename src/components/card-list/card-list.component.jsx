import { Component } from "react";

// Single Responsibility: display list of monsters:
class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log('render from CardList');
    const {monsters} = this.props;

    return (
      <div>
        { monsters.map((monster) => {
          // Anytime you use the map() function inside of render, or you have a list of the same looking jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default CardList;
