import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse ">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand" id="name">
              Weed Dataset Collection
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={`/`}>
                  <span className="glyphicon glyphicon-home" /> Home
                </Link>
              </li>
              <li>
                <Link to={`/contact`}>
                  <span className="glyphicon glyphicon-envelope" /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
