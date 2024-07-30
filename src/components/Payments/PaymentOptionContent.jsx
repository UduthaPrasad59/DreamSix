import React from "react";
// import "./OptionContent.css"; // Import the custom CSS

const OptionContent = ({ selectedOption }) => {
  const transactions = [
    {
      id: 1,
      date: "2024-07-20",
      amount: "$50.00",
      description: "Payment received",
    },
    {
      id: 2,
      date: "2024-07-21",
      amount: "$30.00",
      description: "Payment sent",
    },
    {
      id: 3,
      date: "2024-07-22",
      amount: "$70.00",
      description: "Refund issued",
    },
    {
      id: 4,
      date: "2024-07-23",
      amount: "$20.00",
      description: "Payment received",
    },
    {
      id: 5,
      date: "2024-07-24",
      amount: "$90.00",
      description: "Payment sent",
    },
  ];

  return (
    <div className="option-content">
      <h2>{`Recent ${selectedOption}`}</h2>
      {/* <p>{` ${selectedOption}.`}</p> */}
      {selectedOption === "Transactions" && (
        <div>
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-card">
              <h3>Transaction {transaction.id}</h3>
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.amount}</p>
              <p>Description: {transaction.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionContent;
