import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div className="right menu">
      <Link to="/login" className="item">
        Login
      </Link>
      <Link to="/signup" className="item">
        Sign Up
      </Link>
    </div>
  );
};

export default SignedOutLinks;
