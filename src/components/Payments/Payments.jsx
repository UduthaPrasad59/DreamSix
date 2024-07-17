import React, { useState } from "react";
import { Card, Button, List, Typography, Radio, Form, Input } from "antd";
import "./Payments.scss";

const { Title } = Typography;

const payments = [
  { id: 1, type: "Deposit", amount: 100, date: "2024-01-01" },
  { id: 2, type: "Withdraw", amount: 50, date: "2024-01-02" },
  { id: 3, type: "Deposit", amount: 200, date: "2024-01-03" },
  { id: 4, type: "Withdraw", amount: 30, date: "2024-01-04" },
  { id: 5, type: "Deposit", amount: 300, date: "2024-01-05" },
  { id: 6, type: "Withdraw", amount: 20, date: "2024-01-06" },
  { id: 7, type: "Deposit", amount: 400, date: "2024-01-07" },
  { id: 8, type: "Withdraw", amount: 10, date: "2024-01-08" },
  { id: 9, type: "Deposit", amount: 500, date: "2024-01-09" },
  { id: 10, type: "Withdraw", amount: 70, date: "2024-01-10" },
];

const PaymentsPage = () => {
  const [selectedOption, setSelectedOption] = useState("Deposit");
  const [showForm, setShowForm] = useState(false);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setShowForm(false);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const filteredPayments = payments
    .filter((payment) => payment.type === selectedOption)
    .slice(0, 5);

  return (
    <Card className="payments-card" title="Payments" bordered={false}>
      <Radio.Group
        className="radio-group"
        onChange={handleRadioChange}
        value={selectedOption}
      >
        <Radio.Button value="Deposit">Deposit</Radio.Button>
        <Radio.Button value="Withdraw">Withdraw</Radio.Button>
      </Radio.Group>
      <div className="button-container">
        <Button
          type="primary"
          className="action-button"
          onClick={handleButtonClick}
        >
          {selectedOption === "Deposit" ? "Deposit" : "Withdraw"}
        </Button>
      </div>
      {showForm && (
        <Form className="transaction-form">
          <Form.Item
            label={`${selectedOption} Amount`}
            name="amount"
            rules={[{ required: true, message: "Please input the amount!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {selectedOption}
            </Button>
          </Form.Item>
        </Form>
      )}
      <List
        className="payments-list"
        bordered
        dataSource={filteredPayments}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Typography.Text className="date-color">
              {item.date}
            </Typography.Text>{" "}
            - {item.type}: ${item.amount}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PaymentsPage;
