import React from "react"

import Navigation from "../components/Navigation.js"
import Home from "../components/Home.js"
import Agents from "../components/Agents.js"
import Footer from "../components/Footer.js"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };

    this.switchToAgents=this.switchToAgents.bind(this);
    this.switchToHome=this.switchToHome.bind(this);
  }

  switchToHome() {
    this.setState({
      page: "home"
    });
  }

  switchToAgents() {
    this.setState({
      page: "agents"
    });
  }

  render () {

    if (this.state.page==="home") {
      return (
        <div>
          <Navigation 
            page={this.state.page} 
            switchToAgents={this.switchToAgents}
            switchToHome={this.switchToHome}/>
          <Home/>
          <Footer page={this.state.page}/>
        </div>
      );
    }

    if (this.state.page==="agents") {
      return (
        <div>
          <Navigation 
            page={this.state.page} 
            switchToAgents={this.switchToAgents}
            switchToHome={this.switchToHome}/>
          <Agents/>
          <Footer page={this.state.page}/>
        </div>
      );
    }
    
  }

}

export default App;
