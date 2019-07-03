import React from "react";
import { Link } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div className="right menu">
      <Link to="/create" className="item">
        New
      </Link>

      <Link to="/" className="item">
        Log Out
      </Link>

      <Link to="/" className="item">
        <i className="user icon" />
      </Link>
    </div>
  );
};

export default SignedInLinks;
