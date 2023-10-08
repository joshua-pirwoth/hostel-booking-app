// import Recat from 'react'
// import {link} from 'react-router-dom'
// import "./navbar.css"
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import * as Icons from "react-icons/fa";
// import "./navbar.css";
// import { navitems } from "./navitems";
// import button from "./button";
// import dropdown from "./dropdown";

// function Navbar(){
//     const [dropdown, setDropdown] = useState(false);
//     return (
//         <>
//         <nav className='navbar'>
//             <link to="/" className="navbar-logo">
            
//             </link>
//             <ul className="nav-items">
//           {navitems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <button />
//         </nav>
//         </>
//     );
// }

// export default Navbar;

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
      {/* Navigation bar */}
      <nav className="navbar">
        {/* Logo link */}
        <Link to="/" className="navbar-logo">
          HostelHub
        </Link>
        {/* Navigation items */}
        <ul className="nav-items">
          {navitems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)} // Show dropdown on mouse enter
                  onMouseLeave={() => setDropdown(false)} // Hide dropdown on mouse leave
                >
                  <Link to={item.path}>{item.title}</Link>
                  {/* Render the Dropdown component conditionally */}
                  {dropdown && <Dropdown />} {/* Use the Dropdown component */}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* Render the Button component */}
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
