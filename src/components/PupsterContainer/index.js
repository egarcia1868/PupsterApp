import React, {Component} from "react";
import NavTabs from "../NavTabs";
import About from "../../pages/About";
import Discover from "../../pages/Discover";
import Search from "../../pages/Search";

class Pupster extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page});
  };

  renderPage = () => {
    // This will generate the appropriate page based on what the state.currentPage is currently
    switch(this.state.currentPage) {
      case "Discover":
        return <Discover />;
      case "Search":
        return <Search />;
      default:
        return <About />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs 
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Pupster;