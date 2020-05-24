import React from "react"

import Navigation from "../components/Navigation.js"
import Agents from "../components/Agents.js"
import Footer from "../components/Footer.js"

class AgentsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "agents"
        };

        // this.switchToAgents=this.switchToAgents.bind(this);
        // this.switchToHome=this.switchToHome.bind(this);
    }

    render () {
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

export default AgentsPage;
