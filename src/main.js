import React, { Component } from "../node_modules/react";
import Route from "react-router-dom/Route";
import NavLink from "react-router-dom/NavLink";
import Hashrouter from "react-router-dom/HashRouter";
import Skeptic from "./skepticHome";
import SkepticMonika from "./skepticMonika";

class Main extends Component {
  render() {
    return (
      <Hashrouter>
        <div>
          <ul className="header">
            <NavLink exact to="/">Skeptic</NavLink> or <NavLink to="/monika">Monika</NavLink>?
          </ul>
          <div>
            <Route exact path="/" component={Skeptic}/>
            <Route path="/monika" component={SkepticMonika}/>
          </div>
        </div>
        </Hashrouter>
    );
  }
}
 
export default Main;