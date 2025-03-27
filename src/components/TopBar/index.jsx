import React from "react";
import guideToggle from "@assets/images/guide-button.png";
import searchBar from "@assets/images/search-bar.png";
import accountInfo from "@assets/images/account-info.png";
import alltubeLogo from "@assets/images/alltube-home.jpg";

import "./index.scss";

const TopBar = ({ toggleSidebar }) => {
  return (
    <>
      <div id="background" className="style-scope ytd-masthead"></div>
      <div id="container" className="style-scope ytd-masthead">
        <div id="start" className="style-scope ytd-masthead">
          {/* Start toggle */}
          <a id="guide-button" className="style-scope ytd-masthead" onClick={toggleSidebar} >
            <img src={guideToggle} />
          </a>
          {/* start logo */}
          <a
            id="logo"
            className="style-scope ytd-masthead"
            styles="cursor: hover"
            onClick={() => (window.location.href = "/")}
          >
            <img src={alltubeLogo} />
          </a>
        </div>
        {/* search bar */}
        <div id="center" className="style-scope ytd-masthead">
          <a id="search-bar" className="style-scope ytd-masthead">
            <img src={searchBar} />
          </a>
        </div>
        {/* account information */}
        <div id="end" className="style-scope ytd-masthead">
          <a id="account-info" className="style-scope ytd-masthead">
            <img src={accountInfo} />
          </a>
        </div>
      </div>
    </>
  );
};
export default TopBar;
