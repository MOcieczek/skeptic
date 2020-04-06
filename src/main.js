import React, { Component } from "react";
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
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">SkepticHome</NavLink></li>
            <li><NavLink to="/stuff">SkepticMonika</NavLink></li>
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