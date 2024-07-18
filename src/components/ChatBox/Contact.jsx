// Chatbox.js
import React, { useState } from "react";
import { Layout, Input, Button, List, Typography, Avatar } from "antd";

import "./Contact.scss";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const { TextArea } = Input;

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { sender: "admin", text: "Hello! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: "user", text: inputValue }]);
      setInputValue("");
      // Simulate admin reply
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "admin", text: "Iam DreamSix admin , what do you want !." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="Chat-Container">
      <div className="chatbox-layout">
        <Header className="chatbox-header">
          <Text strong style={{ color: "white" }}>
            Chat with Admin
          </Text>
        </Header>
        <Content className="chatbox-content">
          <List
            dataSource={messages}
            renderItem={(item) => (
              <List.Item
                className={
                  item.sender === "admin" ? "admin-message" : "user-message"
                }
              >
                <List.Item.Meta
                  avatar={
                    <Avatar>{item.sender === "admin" ? "A" : "U"}</Avatar>
                  }
                  description={item.text}
                />
              </List.Item>
            )}
          />
        </Content>
        <Footer className="chatbox-footer">
          <TextArea
            rows={2}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={handleSend}
          />
          <Button type="primary" onClick={handleSend} block>
            Send
          </Button>
        </Footer>
      </div>
    </div>
  );
};

export default Chatbox;
