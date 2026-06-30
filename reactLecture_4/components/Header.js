import React from "react";
import ReactDom from "react-dom/client";

// image import
import logoImage from "../images/logo.png";
import boyImage from "../images/boy_image.png";

const Header = () => {
  return (
    <div className="header">
      <div id="logo" className="roundImageBox">
        <img className="roundImage" src={logoImage} alt="logo" />
      </div>

      <div id="nav" className="navBox">
        <button id="items" className="boxItem">
          items
        </button>
        <button id="cart" className="boxItem">
          cart
        </button>
        <button id="help" className="boxItem">
          help
        </button>
        <button id="profile" className="roundImageBox">
          <img className="roundImage" src={boyImage} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default Header;
