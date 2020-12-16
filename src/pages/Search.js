import React, {Component} from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";

class Search extends Component {
  
  state = {
    result: {},
    search: ""
  }

  searchDogs = query => {
    API.search("breed/"+query+"/images")
    .then(res => this.setState({ result: res.data}))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({ search: value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDogs(this.state.search)
  }

  render() {
    return (
      <main className="wrapper">
        <div className="container">
          <div className="row">
            <h1 className="col-12 text-center">
              Search By Breed!
            </h1>
            <SearchForm 
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              autoComplete={this.state.result.keys}
            />
            <SearchResults 
              SearchResults={this.state.result}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Search;