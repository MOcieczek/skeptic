import React, { Component } from "../node_modules/react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Skeptic from "./skepticHome";
import SkepticMonika from "./skepticMonika";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <NavLink exact to="/">Skeptic</NavLink> or <NavLink to="/monika">Monika</NavLink>?
          </ul>
          <div>
            <Route exact path="/" component={Skeptic}/>
            <Route path="/monika" component={SkepticMonika}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;