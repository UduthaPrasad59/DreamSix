import React from "react";
import { Card, Col, Row } from "antd";

const videos = [
  {
    title: "Virat Winning Highlights 1",
    src: "https://www.youtube.com/embed/WQdqgrWvy6g?si=8X5H0s_mpT9r_sND",
  },
  {
    title: "T20 WorldCup Highlights 2",
    src: "https://www.youtube.com/embed/E5dOdXsI_1Y?si=SErxdoWFyXqOa5H4",
  },
  {
    title: "Yuvraj Six 6",
    src: "https://www.youtube.com/embed/8b0ubLO2MUE?si=ovwblTZi1IfMNy6r",
  },
];

const CricketVideos = () => {
  return (
    <Row gutter={16}>
      {videos.map((video, index) => (
        <Col span={8} key={index}>
          <Card
            title={video.title}
            bordered={false}
            style={{ marginBottom: 16, backgroundColor: " #1f5156" }}
          >
            <iframe
              width="100%"
              height="200"
              src={video.src}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CricketVideos;
