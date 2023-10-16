

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
      <div className="profile-container flex">

      <div>
                <SfNav 
                  showProfile={true}
  profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' 
                  profileMenu={[{caption: "Profile", link: "profile"},
                   [{caption: "Profile", link: "support"}, 
                
                   {caption: "Privacy", link: "privacy"}],
               
                    {caption: 'Upgrade', link: "upgrade"}
                  ]} 
                  profilePreamble={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><small><small><i>Welcome to Superflows!</i></small></small></div>}
                  profileComponent={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>}
                  signInCaption="Signup"
                  onMenuClicked={(value)=>{alert(value)}}
                  onSignInPressed={()=>{alert('Subscribe pressed!')}}
                  stylesProfilePictureContainer={
                        {backgroundColor: 'black', padding: '2px', color: 'white', borderRadius: '5px'}
                      } 
                      stylesProfilePreamble={
                        {backgroundColor: 'white', color: 'black'}} stylesProfileComponent={{backgroundColor: 'white', color: 'black'}
                      } 
                      stylesMenu={
                        {backgroundColor: 'black', color: 'white', paddingTop: '3px', paddingBottom: '3px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px'}
                      } 
                      stylesSubMenu={
                        {backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', border: 'solid 1px gray'}
                      }
                      stylesMenuMobile={
                        {backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}
                      }
                      stylesMenuMobileSelected={
                        {backgroundColor: 'white', color: 'black', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}
                      }
                      stylesSubMenuMobile={
                        {backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}
                      }
                />
        </div>






















      </div>
        <hr/>
      </nav>
    </>
  );
}

export default Navbar;
