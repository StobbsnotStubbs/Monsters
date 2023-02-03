import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-bar/search-box.component";
class App extends Component {
  constructor() {
    super(); // To get the daddy's constructors.
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("1 constructor");
  }

  // Get the data from the API once the app is rendered
  componentDidMount() {
    console.log("3 componentDidMount");
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

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("2 render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Index</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder="Search Monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
