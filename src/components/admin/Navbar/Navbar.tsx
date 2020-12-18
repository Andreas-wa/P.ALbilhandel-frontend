import React from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
// import StartCars from "../Start_cars/StartCars";
// import StartMessages from "../Start_cars/Start_messages/StartMessages";
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
            // target={"_blank"}
            onChange={window.location.reload}
            className="navItem"
            activeClassName="underline"
            to="/admin/cars"
          >
            Bilar
          </NavLink>

          <NavLink
            // component={StartMessages}
            target={"/admin/messages"}
            className="navItem"
            activeClassName="underline"
            to="/admin/messages"
            onChange={window.location.reload}
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
