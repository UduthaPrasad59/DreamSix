import React from "react";
import { Card } from "antd";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import CricketVideos from "../YoutubeVideos/YoutubeVideos";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import MatchWinners from "../MatchWinners/MatchWinners";
// import Footer from "../Footer/Footer";

// Import local images
import TopSixImage from "./Images/TopSixImage.png";
import TopScorerImage from "./Images/TopScorerImage.png";

const { Meta } = Card;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    sessionStorage.setItem("selectedCard", title);
    navigate("/matches");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <Card
          onClick={() => handleCardClick("Top SIX")}
          className="dashboard-card"
          cover={<img alt="Top Six" src={TopSixImage} className="card-image" />}
        >
          <Meta />
        </Card>

        <Card
          onClick={() => handleCardClick("Top SCORER")}
          className="dashboard-card"
          cover={
            <img alt="Top Scorer" src={TopScorerImage} className="card-image" />
          }
        >
          <Meta />
        </Card>
      </div>
      <div>
        <AvailablePlayers />
      </div>
      <div>
        <MatchWinners />
      </div>
      <div>
        <CricketVideos />
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default Dashboard;
