import React from 'react';
import { Layout, Menu, Input, Button, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Contact.scss';

const { Header, Content, Footer, Sider } = Layout;

function Chat() {
  return (
    <Layout className="layout">
      <Sider theme="light">
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Chat Group
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">Chat Application</Header>
        <Content className="content">
          <div>
            {/* Chat Box Component */}
            <ChatBox />
          </div>
        </Content>
        <Footer className="footer">Chat Group ©2024</Footer>
      </Layout>
    </Layout>
  );
}

function ChatBox() {
  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'You' }]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-box">
      <List
        className="message-list"
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.sender}
              description={item.text}
            />
          </List.Item>
        )}
      />
      <Input
        className="input-field"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onPressEnter={handleSend}
        placeholder="Type a message"
      />
      <Button type="primary" onClick={handleSend}>Send</Button>
    </div>
  );
}

export default Chat;
