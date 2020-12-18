import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar} from "react-bootstrap";

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <Navbar.Brand href="/">Pokemon</Navbar.Brand>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7" >
            <ul className="navbar-nav ml-auto flex-nowrap">
              <li>
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/Register/">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default HeaderComponent;
