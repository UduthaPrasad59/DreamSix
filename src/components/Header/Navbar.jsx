import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { HomeOutlined, UserOutlined, ReadOutlined, PhoneOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PlayCircleFilled } from '@ant-design/icons';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>DreamSix</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <HomeOutlined /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <UserOutlined /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <ReadOutlined /> Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <PhoneOutlined /> Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <MenuUnfoldOutlined />{" "}
              </span>
            ) : (
              <span className="icon">
                <MenuFoldOutlined />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
