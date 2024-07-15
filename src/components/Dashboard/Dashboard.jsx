import React from "react";
import { Card } from "antd";
import "./Dashboard.scss"
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Dashboard = () => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate("/matches")
    }

    return (
        <div className="dashboard">

            <div className="dashboard-cards">
                <Card
                    onClick={handleCardClick}
                    className="dashboard-card"
                    cover={<img alt="Top Scorer" src="https://tse3.mm.bing.net/th?id=OIP.H5rmkTt11bhxMSReNUSfhQHaFL&pid=Api&P=0&h=180" />}
                >
                    <Meta title="Top Scorer" description="Details about top scorer" />
                </Card>

                <Card
                    onClick={handleCardClick}
                    className="dashboard-card"
                    cover={<img alt="Top Sixer" src="https://tse3.mm.bing.net/th?id=OIP.H5rmkTt11bhxMSReNUSfhQHaFL&pid=Api&P=0&h=180" />}
                >
                    <Meta title="Top Sixer" description="Details about top sixer" />
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
