import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuLink extends Component {
  render() {
    return (
      <nav className="column" id="main-menu">
        <ul>
         <li>
         <Link to={this.props.link}>{this.props.name}</Link>   
         </li>
        </ul>
       </nav>
    );
  }
}