import React from "react";
import { Card } from "antd";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";

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
                    cover={<img alt="Top Six" src="https://tse1.mm.bing.net/th?id=OIP.fgvARLzq6BWX8DQDjDwcoAHaEK&pid=Api&P=0&h=180" />}
                >
                    <Meta title="Top Scorer" description="Details about top scorer" />
                </Card>

                <Card
                    onClick={() => handleCardClick("Top SCORER")}
                    className="dashboard-card"
                    cover={<img alt="Top Score" src="https://tse3.mm.bing.net/th?id=OIP.rSU-ZUGJeXm2_F3N3tMMXQHaEK&pid=Api&P=0&h=180" />}
                >
                    <Meta title="Top Sixer" description="Details about top sixer" />
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
