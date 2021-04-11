import React , {useState, useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-field/search-box.ccomponent';
import './App.css';


function App () {
  
  const[state, setState] = useState({
    monsters: [],
    search:''
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setState((prevState) => {
      return{
        ...prevState,
        monsters: users
      
      }
    }));
    });

    function handleChange (event) {
      const {value} = event.target;
      setState((prevState) => {
        return {
          ...prevState,
          search: value
        }
      });   
  }

  const filteredMonsters = state.monsters.filter(
    monster => monster.name.toLowerCase().includes(state.search)
    );

    return (
    <div className="App">
    <header className="App-header">

    <h1 className='header'> Monsters Rolodex </h1>
    <SearchBox placeholder='Serach Monsters' value={state.search} handleChange={handleChange}/>
    <CardList monsters = {filteredMonsters}></CardList>

    </header>
  </div>
  )
  }
export default App;
