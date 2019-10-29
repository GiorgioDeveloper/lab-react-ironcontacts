import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contactsArray from "./contacts.json";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: contactsArray.slice(0, 5)
    };
  }

  // to add random people

  onClickHandler = () => {
    const currentPeople = this.state.people; // array of people.
    const newPeopleArray = currentPeople.concat(
      //concat method to add element to current array
      contactsArray[Math.floor(Math.random() * 100) + 6] //random number generated
    );
    this.setState({ people: newPeopleArray });
  };

  // to sort the list alphabetically by name

  sortArray = () => {
    const sortedArray = this.state.people.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      people: sortedArray
    });
  };

  // to sort the list by popularity

  sortPopularity = () => {
    const sortedArray = this.state.people.sort(function(a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({
      people: sortedArray
    });
  };

  // delete person

  deletePerson = index => {
    console.log(index);
    const peopleArray = [...this.state.people];

    // const people = peopleArray.filter((person, i) => i !== index);
    const people = peopleArray.filter((person, i) => {
      // check index
      console.log(person);
      console.log(i);
      console.log(index);
      return i !== index;
    });

    this.setState({ people });
  };

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.onClickHandler}>Add People</button>
          <button onClick={this.sortArray}>Sort Name</button>
          <button onClick={this.sortPopularity}>Sort Popularity</button>
        </nav>
        <h1>Iron Contacts</h1>
        {/* down here we declare the 2 props to pass to the component List.jsx the array people and the method deletePerson */}
        <List people={this.state.people} deletePerson={this.deletePerson} />
      </div>
    );
  }
}

export default App;
