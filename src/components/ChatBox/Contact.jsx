import React from "react";
import { Row, Col, Card } from "antd";
import "./Contact.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";

const socialMedia = [
  {
    name: "Facebook",
    icon: <FacebookOutlined style={{ fontSize: "24px", color: "#3b5998" }} />,
    link: "https://www.facebook.com/dreamsix",
  },
  {
    name: "Instagram",
    icon: <InstagramOutlined style={{ fontSize: "24px", color: "#E4405F" }} />,
    link: "https://www.instagram.com/dreamsix",
  },
  {
    name: "Teligram",
    icon: <FaTelegramPlane style={{ fontSize: "24px", color: "#1DA1F2" }} />,
    link: "https://telegram.org/",
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppOutlined style={{ fontSize: "24px", color: "#25D366" }} />,
    link: "https://wa.me/1234567890",
  },
];

const Chatbox = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {socialMedia.map((media) => (
          <Col xs={24} sm={12} md={6} key={media.name}>
            <a href={media.link} target="_blank" rel="noopener noreferrer">
              <Card hoverable style={{ textAlign: "center" }}>
                {media.icon}
                <p>{media.name}</p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <div className="Chatbox-data">
        <h2>Dream Six</h2>
        <p>
          Dream Six is an exciting online cricket game that lets you experience
          the thrill of the sport from the comfort of your home.
        </p>
        <p>
          If you have any doubts or questions, feel free to reach out to us on
          social media.
        </p>
        <p>
          We are always here to help you with any queries or support you might
          need.
        </p>
        <p>We can help you 24/7.</p>

        <p>
          We are available in Instagram , Whatsapp , Facebook , Twitter also.
          alredy we are providing the links above.
        </p>
      </div>
    </div>
  );
};

export default Chatbox;
