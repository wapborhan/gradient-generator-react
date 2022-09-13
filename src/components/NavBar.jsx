import React, { Fragment } from "react";
import { FaBars, FaUserCircle, FaAlignLeft } from "react-icons/fa";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav
        id="topbar"
        className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
      >
        <div
          className="sidebars-button text-dark mr-auto"
          onClick={props.handleToggle}
        >
          {props.isActive ? <FaBars /> : <FaAlignLeft />}
          <div className={props.isActive ? "dashboard" : "dashboard-show"}>
            SR Gradient
          </div>
        </div>

        <h2 id="nameTitle" className="text-center text-dark">
          <span className="heabar"> CSS Gradient</span>{" "}
          {/* <span className="headbn">দয়াময় মেহেরবান আল্লাহর নামে</span> */}
        </h2>
        <div className="account ">
          <FaUserCircle />
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;