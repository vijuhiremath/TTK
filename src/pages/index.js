import React from "react"

import Navigation from "../components/Navigation.js"
import Home from "../components/Home.js"
import Footer from "../components/Footer.js"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
  }

  render () {

    return (
      <div>
        <Navigation 
          page={this.state.page}/>
        <Home/>
        <Footer page={this.state.page}/>
      </div>
    );
    
  }

}

export default App;
