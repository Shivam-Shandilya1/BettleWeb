 import React from "react";
 import "./style.css";
 function Navbar () {{
     return(
         <>
         <div className="navbar">
    <input type="checkbox" id="navbar-checkbox" />
    <div className="navbar-header">
      <div className="navbar-title">
        BEETLE
      </div>
      </div>
      <div className="navbar-responsive-button">
        <label for="navbar-checkbox">
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"> </span>
          <span className="hamburger-icon"></span>
        </label>
    </div>
    <div className="navbar-links">
      <a href="#Home">Home</a>
      <a href="#About">About</a>
      <a href="#Events">Events</a>
      <a href="#Contact">Contact</a>
    </div>
     </div>
         </>
     )
 }}
 export default Navbar;