// we will start with the class component 
// react already has Component which has some built in features to support class components
//Component has render menthod which hosts the whole jsx 
// what we want to render is what is explicitly given in render method 
// through state concept , we can use javascript variables insid eof HTML , change the html according to the behaviour
// we can add event handlers and modfiy html using js
// to get the monsters information we will make a API call 
// decide : where to place the returned information , how to get the info, from where we should call API
// where : monsters empty array , how : by fetch API call , from where : componentDidMount()
// componentDidMount method is a life cycle method, which executes as soon as the page loads
// the data in componentDidount is made available to DOM or page as soon as it loads
// class components require : mounting, lifecycle methods , contructors initialisation , rendering and unmounting
// functional components do not need all these , they need props | pure impure functions , sideefftcs replicate the class component behaviour
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }

      ))
  }
  onSearchChange = (event) => {

    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => {
        return { searchField };
      })

  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
