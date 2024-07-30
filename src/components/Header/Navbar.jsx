import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ReadOutlined,
  PhoneOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { SlUser } from "react-icons/sl";
import "./NavBar.scss";

// Example logo URL; replace with your actual logo URL
const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29GI8Pxv7AcQ24XY1vMZQjYlcZizZMy-e-w&s";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    setUsername(null);
    navigate("/login");
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logoUrl} alt="Logo" className="logo-image" />
            <span>DreamSix</span>
          </NavLink>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <MenuUnfoldOutlined />
              </span>
            ) : (
              <span className="icon">
                <MenuFoldOutlined />
              </span>
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-links" onClick={handleClick}>
                <HomeOutlined /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/rules"
                className="nav-links"
                onClick={handleClick}
              >
                <UserOutlined /> Rules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/payments"
                className="nav-links"
                onClick={handleClick}
              >
                <ReadOutlined /> Payments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                <PhoneOutlined /> Contact Us
              </NavLink>
            </li>
            {!username ? (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <SlUser /> Login/Signup
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <Dropdown overlay={userMenu} trigger={["click"]}>
                  <span
                    className="nav-links"
                    onClick={(e) => e.preventDefault()}
                  >
                    {username}
                  </span>
                </Dropdown>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
