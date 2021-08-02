import React from "react";

const Header = ({ children, className, containerClass }) => {
  return (
    //if classname is set give it a space plus classname otherwise don't do anything
    <nav
      className={
        "navbar navbar-light bg-light" + (className ? " " + className : "")
      }
    >
      <div
        className={
          "container-fluid" + (containerClass ? " " + containerClass : "")
        }
      >
        <span className="navbar-brand mb-0 h1">{children}</span>
      </div>
    </nav>
  );
};
export default Header;
