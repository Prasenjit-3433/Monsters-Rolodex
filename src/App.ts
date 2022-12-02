import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import "./App.css";

type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  // Initializing new states
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  // Creating side-effects
    useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData <Monster[]>("https://jsonplaceholder.typicode.com/users");
        setMonsters(users);
      }
      
      fetchUsers();
    }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toUpperCase().startsWith(searchField);   
    });
    
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toUpperCase(); 
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
      
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
