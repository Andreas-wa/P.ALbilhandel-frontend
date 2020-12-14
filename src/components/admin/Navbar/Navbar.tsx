import React from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="nav">
      <BrowserRouter>
        <nav className="navBar">
          <img
            src={process.env.PUBLIC_URL + "/images/biglogo.png"}
            id="logoNavbar"
            className="navItem"
            alt="logoIMG"
          />
          <NavLink
            className="navItem"
            activeClassName="underline"
            exact
            to="/admin/start/cars"
          >
            Bilar
          </NavLink>
          <NavLink
            className="navItem"
            activeClassName="underline"
            exact
            to="/admin/start/messages"
          >
            Meddelanden
          </NavLink>
          {/* this needs a logout function */}
          <Link className="navItem" to="/login">
            Logga ut
          </Link>
        </nav>
      </BrowserRouter>
    </div>
  );
}
