import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search"; 
function Header() {
  return (
    <div className="Header">
    <img
    className="header_logo" 
    src="data:image/png;base64,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"/>
    
<div className="header_search">
<input
className="header_searchInput"
type="text" />
<SearchIcon className="header_searchIcon"/>
</div>
   
   <div className="header_nav">
   <div classname='header_option'>
   <span
   className='header_optionOne'> Hello Guests </span>
  
   <span
   className='header_optionTwo'> Sign In </span>
   </div>

   <div classname='header_option'>
    <span
   className='header_optionOne'> Returns </span>
   <span
   className='header_optionTwo'> Orders </span>
   </div>
   <div classname='header_option'>
   <span
  className='header_optionOne'> Your </span>
  <span
  className='header_optionTwo'> Prime </span>
  </div>
  </div>
  </div>
  );
}

export default Header