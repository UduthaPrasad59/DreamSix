// LoginPage.js
import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, Divider } from "antd";
import "./LoginPage.scss"; // Create a CSS file for custom styling

const { Title } = Typography;

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Row className="login-container">
      <Col xs={24} md={12} className="login-image">
        <img
          src="https://i.pinimg.com/originals/8d/4c/3e/8d4c3e3cbb275adfba239326db22397b.png"
          alt="Login"
          style={{ height: "100%" }}
        />
      </Col>
      <Col xs={24} md={12} className="login-form-container">
        <div className="form-wrapper">
          <Title style={{ color: "white" }} level={2}>
            {isLogin ? "Login" : "Create Account"}
          </Title>
          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
            className="login"
          >
            {!isLogin && (
              <>
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </>
            )}
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </Form.Item>
          </Form>
          <Divider />
          <Button
            style={{ color: "white" }}
            type="link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Create one"
              : "Already have an account? Login"}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
