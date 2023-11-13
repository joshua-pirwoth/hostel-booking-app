

import React from "react";
import { Link} from "react-router-dom";
import "./style.css";



// import Button from "./button"; // Import the Button component
// import Dropdown from "./dropdown"; // Import the Dropdown component

function Navbar() {

  // State to control the visibility of the dropdown menu
  // const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {
      /* Navigation bar */
      }
      <nav className="navbar flex ">
        {
        /* Logo link */}
       
        <Link to="/signup" className="navbar-logo">
          HostelHub
        </Link>
      
      <div className="flex box-container shadow-md  ">
        <div>  All</div>
        <div className="search-item"></div>
        <input type="text" class="search-input" placeholder="   Search.....  "></input>
      </div>
      <div className=" acc-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> &nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
      </div>
            
        <hr/>
      </nav>
    </>
  );
}

export default Navbar;
