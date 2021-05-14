import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";

const getDogsAPI =
  "https://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true";

class App extends React.Component {
  state = {
    dogs: [],
    loading: true,
  };
  componentDidMount = () => {
    this.getDogs();
  };

  getDogs = () => {
    this.setState({ loading: true });
    fetch(getDogsAPI)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dogs: data, loading: false });
      })
      .catch(console.log);
  };

  render() {
    const { dogs, loading } = this.state;
    const dog1 = dogs[0];
    const dog2 = dogs[1];

    if (loading == true) return <Spinner animation="border" />;
    return (
      <div className="main">
        <h1 className="text-center">Keep on looking...</h1>
        <div className="container text-center">
          <div className="img-container">
            <img className="img" src={dog1} alt="" />
            <h3 className="name">Am I cute?</h3>
            <Button
              variant="outline-primary"
              className="choose-btn"
              onClick={() => this.getDogs()}
            >
              This
            </Button>
          </div>
          <h3 className="or">OR</h3>
          <div className="img-container">
            <img className="img" src={dog2} alt="" />
            <h3 className="name">Okay...look at me now</h3>
            <Button
              variant="outline-info"
              className="choose-btn"
              onClick={() => this.getDogs()}
            >
              That
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
