// App.js
import React, { useState } from "react";
import { Radio, Button, Form, Input, List, Card } from "antd";

const transactions = [
  { id: 1, type: "deposit", amount: 100 },
  { id: 2, type: "withdraw", amount: 50 },
  { id: 3, type: "deposit", amount: 200 },
  { id: 4, type: "withdraw", amount: 150 },
  { id: 5, type: "deposit", amount: 300 },
  { id: 6, type: "withdraw", amount: 100 },
  { id: 7, type: "deposit", amount: 400 },
  { id: 8, type: "withdraw", amount: 200 },
  { id: 9, type: "deposit", amount: 500 },
  { id: 10, type: "withdraw", amount: 250 },
];

const Payments = () => {
  const [form] = Form.useForm();
  const [transactionType, setTransactionType] = useState("deposit");
  const [showForm, setShowForm] = useState(false);

  const handleTypeChange = (e) => {
    setTransactionType(e.target.value);
    setShowForm(false);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFinish = (values) => {
    console.log("Form Values:", values);
    form.resetFields();
    setShowForm(false);
  };

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.type === transactionType
  );

  return (
    <div style={{ padding: "50px" }}>
      <Radio.Group value={transactionType} onChange={handleTypeChange}>
        <Radio.Button value="deposit">Deposit</Radio.Button>
        <Radio.Button value="withdraw">Withdraw</Radio.Button>
      </Radio.Group>
      <div style={{ margin: "20px 0" }}>
        <Button type="primary" onClick={handleButtonClick}>
          {transactionType === "deposit" ? "Deposit Money" : "Withdraw Money"}
        </Button>
      </div>
      {showForm && (
        <Form form={form} onFinish={handleFinish} layout="inline">
          <Form.Item
            name="amount"
            rules={[{ required: true, message: "Please input the amount!" }]}
          >
            <Input placeholder="Amount" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
      <div style={{ marginTop: "20px" }}>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={filteredTransactions}
          renderItem={(item) => (
            <List.Item>
              <Card title={`Transaction ID: ${item.id}`}>
                {item.type === "deposit" ? "Deposited: " : "Withdrawn: "}$
                {item.amount}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Payments;
