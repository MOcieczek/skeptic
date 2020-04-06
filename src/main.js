import React, { Component } from "../node_modules/react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SkepticHome from "./skepticHome";
import SkepticMonika from "./skepticMonika";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <NavLink to="/">Skeptic</NavLink> <NavLink to="/monika">Monika</NavLink>
          </ul>
          <div className="content">
            <Route path="/" component={SkepticHome}/>
            <Route path="/monika" component={SkepticMonika}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;