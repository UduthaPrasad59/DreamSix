import React from "react";
import { Layout } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./Footer.scss";

// const { Footer } = Layout;

const Footer = () => {
  return (
    <Footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Dream Six. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <p>
            <MailOutlined /> Email:{" "}
            <a href="mailto:info@dreamsix.com">info@dreamsix.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Dream Six</p>
      </div>
    </Footer>
  );
};

export default Footer;
