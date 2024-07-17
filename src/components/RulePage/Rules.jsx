import React from "react";
import { Card, List, Button, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./Rules.scss";

const { Title } = Typography;

const rules = [
  "Rule 1: Lorem ipsum dolor sit amet.",
  "Rule 2: Consectetur adipiscing elit.",
  "Rule 3: Integer nec odio.",
  "Rule 4: Praesent libero.",
  "Rule 5: Sed cursus ante dapibus diam.",
  "Rule 6: Sed nisi.",
  "Rule 7: Nulla quis sem at nibh elementum imperdiet.",
  "Rule 8: Duis sagittis ipsum.",
  "Rule 9: Praesent mauris.",
  "Rule 10: Fusce nec tellus sed augue semper porta.",
];

const downloadRules = () => {
  const element = document.createElement("a");
  const file = new Blob([rules.join("\n")], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "rules.txt";
  document.body.appendChild(element);
  element.click();
};

const RulesPage = () => {
  return (
    <Card className="rules-card" title="DreamSix - Rules" bordered={false}>
      {/* <Button
        type="primary"
        icon={<DownloadOutlined />}
        onClick={downloadRules}
        className="download-button"
      >
        Download Rules
      </Button> */}
      <List
        bordered
        dataSource={rules}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        className="rules-list"
      />
    </Card>
  );
};

export default RulesPage;
