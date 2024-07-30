import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Matches.scss";

const Matches = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState("");

  useEffect(() => {
    const cardTitle = sessionStorage.getItem("selectedCard");
    if (cardTitle) {
      setSelectedCard(cardTitle);
    }
  }, []);

  const matchesList = [
    {
      id: 1,
      title: "IND v SL",
      imageUrl:
        "https://fantasykhiladi.com/wp-content/uploads/2024/07/Team-India-ODI-Squad-For-Sri-Lanka-2024-Tour-Schedule-venues-Squad-Players-list-.webp",
      content: "Match details for IND v ZIM",
      link: "/firstmatch",
      date: "24-08-2024",
    },
    {
      id: 2,
      title: "IND v AUS",
      imageUrl:
        "https://english.cdn.zeenews.com/sites/default/files/2023/09/26/1288435-whatsapp-image-2023-09-26-at-10.54.10-am.jpeg",
      content: "Match details for Dumbulla v Jafna kings",
      link: "/secondmatch",
      date: "24-08-2024",
    },
    {
      id: 3,
      title: "ENG v RSA",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-87554668,width-1070,height-580,imgsize-69640,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      content: "Match details for WIW v AUSW",
      link: "/thirdmatch",
      date: "24-08-2024",
    },
  ];

  const handleCardClick = (match) => {
    navigate("/match-details", { state: { match } });
  };

  return (
    <div className="match-container">
      {selectedCard && (
        <div className="blink">
          <span>{selectedCard}</span>
        </div>
      )}
      <div className="home-page">
        {matchesList.map((match) => (
          <div
            key={match.id}
            onClick={() => handleCardClick(match)}
            className="home-page-card"
          >
            <img
              src={match.imageUrl}
              alt={match.title}
              className="card-image"
            />
            <div className="card-content">
              <h2>{match.title}</h2>
              <p>{match.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
