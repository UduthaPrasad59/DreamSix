// MatchWinners.jsx
import React from "react";
import { Card, Row, Col } from "antd";
import "./MatchWinners.scss";

const winners = [
  {
    match: "Match 1: IND v PAK ",
    winner: "John Doe",
    amount: "62000/-",
    type: " Top Scorer ",
    image:
      "https://www.bnl.gov/today/body_pics/2017/06/StephanHruszkewycz-hr.jpg",
  },
  {
    match: "Match 2: SL v BAN ",
    winner: "Jane Smith",
    amount: "38000/-",
    type: " Top Sixer ",
    image: "https://i.imgur.com/JFHjdNr.jpg",
  },
  {
    match: "Match 3: ENG v RSA ",
    winner: "Bob Johnson",
    amount: "20000/-",
    type: " Top Sixer ",
    image:
      "https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg",
  },
  {
    match: "Match 4: NZ v WI ",
    winner: "Alice Brown",
    amount: "24000/-",
    type: " Top Scorer ",
    image:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2072",
  },
];

const MatchWinners = () => {
  return (
    <div className="match-winners">
      <h2 style={{ color: "white" }}> Today Match Winners</h2>
      <Row gutter={[16, 16]}>
        {winners.map((winner, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable className="winner-card">
              <img
                src={winner.image}
                alt={winner.winner}
                className="winner-image"
              />
              <div className="winner-details">
                <h3>{winner.match}</h3>
                <p>Winner: {winner.winner}</p>
                <p>Amount Won: {winner.amount}</p>
                <p>Type : {winner.type}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MatchWinners;
