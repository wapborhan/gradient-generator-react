import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import sidenav from "./sidenav";
import { FaQuran, FaInfoCircle } from "react-icons/fa";

const Sidebar = (props) => {
  return (
    <Fragment>
      <div
        className={
          props.isActive
            ? "sidebars bg-dark text-light  "
            : "sidebars bg-dark text-light active"
        }
      >
        <div className="logo-details">
          <FaQuran />
          <span className="logo_name">Islam BD</span>
        </div>
        <ul className="nav-links">
          {sidenav.map((data, idx) => (
            <li key={idx}>
              <NavLink to={data.path}>
                <i className="fas fa-exclamation-triangle text-white">
                  {data.iconname}
                </i>
                <span className="links_name">{data.tittle} </span>
              </NavLink>
            </li>
          ))}
          <li className="log_out">
            <NavLink to="/about">
              <i className="fas fa-exclamation-triangle text-white">
                <FaInfoCircle />
              </i>
              <span className="links_name">সাইট সম্পর্কে</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
