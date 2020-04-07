import React, { Component } from "../node_modules/react";
import Route from "react-router-dom/Route";
import Hashrouter from "react-router-dom/HashRouter";
import Skeptic from "./skepticHome";
import SkepticMonika from "./skepticMonika";

class Main extends Component {
  render() {
    return (
      <Hashrouter>
            <Route exact path="/" component={Skeptic}/>
            <Route path="/monika" component={SkepticMonika}/>
        </Hashrouter>
    );
  }
}
 
export default Main;