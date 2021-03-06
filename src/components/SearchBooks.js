import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to="/search" onClick={this.props.onSetSearchPage}>
          Add a book
        </Link>
      </div>
    );
  }
}

export default SearchBooks;
