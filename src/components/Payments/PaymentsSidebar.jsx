import React from "react";
import { Menu, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Sidebar = ({ setSelectedOption }) => {
  const handleClick = (e) => {
    setSelectedOption(e.key);
  };

  const handleUploadChange = (info) => {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage || Upload.LIST_IGNORE;
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      mode="vertical"
      defaultSelectedKeys={["Transactions"]}
      className="sidebar-container"
    >
      <Menu.Item style={{ color: "white" }} key="Transactions">
        Transactions
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="deposite">
        Deposite
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="withdraw">
        Withdraw
      </Menu.Item>
      <div
        style={{
          marginTop: "150px",
          background: "#8c52ab",
          border: "1px solid yellow",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <Menu.Item key="upload" className="upload-item">
          <Upload
            name="file"
            action="https://example.com/upload" // Replace with your upload URL
            onChange={handleUploadChange}
            beforeUpload={beforeUpload}
            showUploadList={false} // Hides the upload list
            multiple={true}
            className="upload-input"
          >
            <span className="upload-text">
              <UploadOutlined /> Click to Upload
            </span>
          </Upload>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Sidebar;
