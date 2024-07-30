import React from "react";
import { Card } from "antd";
import "./AvailablePlayers.scss"; // Import your custom styles

const { Meta } = Card;

const cardData = [
  {
    matchTitle: "Match: IND v BAN ",
    title: "Rishab Pant",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323000/323036.png",
    price: "1400/-",
  },
  {
    matchTitle: "Match: AUS v SL ",
    title: "Trevis Head",
    image:
      "https://cricclubs.com/documentsRep/profilePics/4b14d925-ab15-43ff-93ad-640e2907c3a2.jpeg",
    price: "2000/-",
  },
  {
    matchTitle: "Match: NZ v ZIM ",
    title: "Rachin Ravindra",
    image: "https://images.news18.com/webstories/2023/12/Rachin-Ravindra.jpg",
    price: "1000/-",
  },
  {
    matchTitle: "Match: RSA v WI ",
    title: "R Rossouwe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRd0oS--vcqB4M1dVhKJTz_emNwQqScgs1A&s",
    price: "1500/-",
  },
  {
    matchTitle: "Match: ENG v NED ",
    title: "Jos Buttler",
    image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/182.png",
    price: "1800/-",
  },
];

const MatchCards = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        marginTop: "60px",
      }}
    >
      <h2>Available Players</h2>
      <div className="match-cards-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            hoverable
            className="match-card"
            title={card.matchTitle}
            cover={<img alt={card.title} src={card.image} />}
          >
            <Meta title={card.title} description={`Price: ${card.price}`} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchCards;
