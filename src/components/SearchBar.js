import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  searchInput = (e) => {
    this.setState({ term: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.formSubmit}>
          <div className="field">
            <label>Search for videos</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.searchInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
