import React from "react";
import Cards from './Cards/Cards'
import "./App.css";


class App extends React.Component {

  render() {
    return (      
        <div className="main">
        <h1 className="text-center">Keep on looking...</h1>
        <Cards />
      </div>        
    );
  }
}
export default App;
