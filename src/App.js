import React, { Component } from 'react';
import './App.css';
import DropDown from './DropDown';
import ListSelector from './ListSelector';

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

const LISTS = {
  LONG_LIST,
  SHORT_LIST,
};

class App extends Component {
  state = {
    selectedCategory: 1,
    selectedListName: 'SHORT_LIST',
    searchWord: '',
    error: null,
  };

  handleCategoryChange = (value) => {
    this.setState({
      selectedCategory: value,
    });
  };

  handleSearchChange = (value) => {
    const isValid = value.length >= 3;

    this.setState({
      searchWord: value,
      error: isValid
        ? null
        : 'Value should have length at least 3',
    });
  };

  toggleOptionsList = () => {
    this.setState(prevState => {
      return {
        selectedListName: prevState.selectedListName === 'LONG_LIST'
          ? 'SHORT_LIST'
          : 'LONG_LIST'
      };
    });
  };

  render() {
    const {
      selectedCategory,
      selectedListName,
      searchWord,
      error,
    } = this.state;

    return (
      <div className="app">
        <ListSelector
          selectedListName={selectedListName}
          onChange={this.toggleOptionsList}
        />

        <div className="form-group">
          <input
            type="text"
            name="searchWord"
            value={searchWord}
            onChange={({ target: { value } }) => this.handleSearchChange(value)}
          />
          {searchWord && error && (
            <small className="form-text text-muted">
              {error}
            </small>
          )}
        </div>

        <DropDown
          options={LISTS[selectedListName]}
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        />
      </div>
    );
  }
}

export default App;
