

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navitems } from "./navitems";
import Button from "./button"; // Import the Button component
import Dropdown from "./dropdown"; // Import the Dropdown component

function Navbar() {
  // State to control the visibility of the dropdown menu
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {
      /* Navigation bar */
      }
      <nav className="navbar flex ">
        {
        /* Logo link */}
       
        <Link to="/" className="navbar-logo">
          HostelHub
        </Link>
      <div className="flex box-container shadow-md  ">
        <div>All</div>
        <div className="search-item"></div>
        <input type="text" class="search-input" placeholder="Search..."></input>
      </div>
      <div className="profile-container flex">

      </div>
        
      </nav>
    </>
  );
}

export default Navbar;
