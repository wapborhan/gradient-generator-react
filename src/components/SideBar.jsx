import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import sidenav from "./sidenav";
import { HiOutlineColorSwatch, HiInformationCircle } from "react-icons/hi";

const Sidebar = (props) => {
  return (
    <Fragment>
      <div
        className={
          props.isActive
            ? "sidebars text-light  "
            : "sidebars text-light active"
        }
      >
        <div className="logo-details">
          <HiOutlineColorSwatch />
          <span className="logo_name">SR Gradient</span>
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
                <HiInformationCircle />
              </i>
              <span className="links_name">About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
