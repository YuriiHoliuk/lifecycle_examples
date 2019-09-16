import React, { Component } from 'react';
import './App.css';
import DropDown from './DropDown';

const SHORT_LIST = [
  { value: 1, label: 'All categories' },
];

const LONG_LIST = [
  { value: 1, label: 'All categories' },
  { value: 2, label: 'Home' },
  { value: 3, label: 'Electronics' },
  { value: 4, label: 'Sport' },
  { value: 5, label: 'Books' },
];

class App extends Component {
  state = {
    selectedCategory: 1,
    categories: LONG_LIST,
  };

  handleCategoryChange = (value) => {
    this.setState({
      selectedCategory: value,
    });
  };

  toggleOptionsList = () => {
    this.setState(prevState => {
      return {
        categories: prevState.categories === LONG_LIST
          ? SHORT_LIST
          : LONG_LIST
      };
    });
  };

  render() {
    const { selectedCategory, categories } = this.state;

    return (
      <div className="app">
        <button
          type="button"
          className="toggle-lists"
          onClick={this.toggleOptionsList}
        >
          Toggle lists
        </button>

        <DropDown
          options={categories}
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        />
      </div>
    );
  }
}

export default App;
