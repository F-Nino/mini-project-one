import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Menu = () => {
  return (
    <div className="ui massive menu">
      <Link to="/" className="active item">
        Felipe
      </Link>

      <SignedOutLinks />
      <SignedInLinks />
    </div>
  );
};

export default Menu;
