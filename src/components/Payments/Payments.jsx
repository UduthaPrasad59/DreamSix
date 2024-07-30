import React, { useState } from "react";
import Sidebar from "./PaymentsSidebar";
import OptionContent from "./PaymentOptionContent";
import "./Payments.scss";
const Payments = () => {
  const [selectedOption, setSelectedOption] = useState("Transactions");

  return (
    <div className="payments-page">
      <div className="main-container">
        <div className="scanner-container">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXAxMbCBTduPnU9BsL-7hkqdyo-csZ32wHubFXBDGsHs-OjIcqY3PkYBKjPn6TpBgzWQ&usqp=CAU"
            }
            alt="Dummy Scanner"
            className="scanner-image"
          />
        </div>
        <Sidebar setSelectedOption={setSelectedOption} />
        <OptionContent selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default Payments;
