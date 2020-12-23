import React, {Component} from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Alert from "../components/Alert";

class Search extends Component {
  
  state = {
    result: [],
    search: "",
    error: "",
    breeds: [],
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.search("breed/"+this.state.search+"/images")
    .then(res => { 
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({ result: res.data.message, error: ""})
    })
    .catch(err => this.setState({error: err.message}));
  }

  //When the component mounts this will get our list of breeds
  componentDidMount() {
    API.search("breeds/list/all")
    .then(res => {
      this.setState({ breeds: res.data.message})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <main className="wrapper">
        <div className="container">
          <div className="row">
            <h1 className="col-12 text-center">
              Search By Breed!
            </h1>
            <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0 }}>
              {this.state.error}
            </Alert>
            <SearchForm 
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              breeds={this.state.breeds}
            />
            <SearchResults 
              searchResults={this.state.result}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Search;