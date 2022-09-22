import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Here we're saying that we want to make a class, called App and also want to extend the functionality of the `Component` class that React gave us:
class App extends Component {
  // State: local-state or just state is some information that only the component itself is aware of and can read & modify from. we use constructor method to generate state for a class component.
  constructor() {
    // super just calls the underlying constructor method of any other classes you're extending from. So here our class App extends from component class, by calling super so that you're calling constructor of component class.
    super();

    // Now instantiate state for this component. A state is always a JSON Object:
    this.state = {
      // Initialized monsters as an empty array for edge case:
      monsters: [],
      searchField: ''
    };
    console.log("constructor");
  }

  // Whatever you write here will get run whenever the component mounts (i.e. first time a component gets placed into DOM) .ie. Just after the initial UI of the component was mounted first time!
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");

    // Filtering always should happens on the originak list of users, so don't modify the state 
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toUpperCase().startsWith(this.state.searchField);   
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={(event) => {
            const searchField = event.target.value.toUpperCase();
            
            // Store the input value in the state so that throughout the component we can have access to it:
            this.setState(
              () => {
                // return { searchField: searchField };

                // Shorthand: In ES6, the key is going to be the name of the variable and the value is going to be the value of the variable for this object:
                return { searchField };
              }
            );
          }}
        />
        {filteredMonsters.map((monster) => {
          // Anytime you use the map() function inside of render, or you have a list of the same looking jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
