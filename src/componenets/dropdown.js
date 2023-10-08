// import React, { useState } from "react";
// import { serviceDropdown } from "./navitems";
// import { Link } from "react-router-dom";
// import "./dropdown.css";

// function Dropdown() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <ul
//         className={dropdown ? "services-submenu clicked" : "services-submenu"}
//         onClick={() => setDropdown(!dropdown)}
//       >
//         {serviceDropdown.map((item) => {
//           return (
//             <li key={item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDropdown(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default dropdown;

import React, { useState } from "react";
import { serviceDropdown } from "./navitems";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <ul
      className={isDropdownOpen ? "services-submenu clicked" : "services-submenu"}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      {serviceDropdown.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setIsDropdownOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
