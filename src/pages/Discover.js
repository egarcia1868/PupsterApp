import React, {Component} from "react";
import API from "../utils/API";
import PupCard from "../components/PupCard/PupCard";
import MatchAlert from "../components/MatchAlert/MatchAlert";

class Discover extends Component {
  // Setting initial state of the "matched" dogs counter
  state = {
    currentPup: "",
    count: 0,
    matched: false,
  };

  handleMatchMaking = () => {
    this.loadPupPic();
    // returns a random integer from 1 to 5
    if ((Math.floor(Math.random() * 5) + 1) === 1) {
      this.setState({ count: this.state.count + 1, matched: true});
    };
  }

  loadPupPic = () => {
    this.setState({matched:false});

    API.search("breeds/image/random")
    .then(res => this.setState({ currentPup: res.data.message }))
    .catch(err => console.log(err));
  }

  // When this component mounts, a random dog pic will be loaded
  componentDidMount() {
    this.loadPupPic();
  }

  render() {
    return (
      <main className="wrapper">
        <div>
        {/*console.log(this.pupPic)*/}
          <h1>
            Make New Friends
          </h1>
          <h2>
            Thumbs up on any pups you'd like to meet!
          </h2>
          <PupCard
            currentPup={this.state.currentPup}
            handleMatchMaking={this.handleMatchMaking}
            handlePupChange={this.loadPupPic}
          />
          <h1>
            Made friends with {this.state.count} pups so far!
          </h1>
          <div>
          {this.state.matched ? (
            <MatchAlert 
            visible={1}
            />
          ):(
            <MatchAlert 
            visible={0}
            />
          )}
          </div>
        </div>
      </main>
    );
  }
}

export default Discover