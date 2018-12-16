import React, { Component } from 'react';
import Button from './Button';
import './SearchBar.css';

export default class SearchBar extends Component {
  static defaultProps = {
    handleSearchClick: () => {},
    placeholder: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleSearchClick(this.state.searchText);
    return false;
  };
  render() {
    const { placeholder } = this.props;
    const { searchText } = this.state;
    return (
      <form className="search-container" onSubmit={this.handleFormSubmit}>
        <input
          aria-label="Movie genre"
          className="search-input"
          placeholder={placeholder}
          value={searchText}
          onChange={e => this.setState({ searchText: e.target.value })}
        />
        <Button text="Search" type="submit" />
      </form>
    );
  }
}
