import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
  
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
              <NavLink className="navbar-brand ml-5" to="/">Tech Anda</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink exact activeClassName="manu_active" className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="manu_active" className="nav-link" to="/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="manu_active" className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="manu_active" className="nav-link" to="/contact">Contact</NavLink>
                  </li>

                </ul>

              </div>
            </nav>
          
    </>
  );
};

export default NavBar;
