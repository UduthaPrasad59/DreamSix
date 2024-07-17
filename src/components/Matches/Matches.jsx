import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Matches.scss';

const Matches = () => {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState('');

    useEffect(() => {
        const cardTitle = sessionStorage.getItem('selectedCard');
        if (cardTitle) {
            setSelectedCard(cardTitle);
        }
    }, []);

    const matchesList = [
        {
            id: 1,
            title: 'IND v ZIM',
            imageUrl: 'https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2022/11/06063944/IND-vs-Zim-696x453.png',
            content: 'Match details for IND v ZIM',
            link: '/firstmatch',
            date: "24-08-2024"
        },
        {
            id: 2,
            title: 'Dumbulla v Jafna kings',
            imageUrl: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/10/19/932375-twitter-5.jpg',
            content: 'Match details for Dumbulla v Jafna kings',
            link: '/secondmatch',
            date: "24-08-2024"
        },
        {
            id: 3,
            title: 'WIW v AUSW',
            imageUrl: 'https://crickettimes.com/wp-content/uploads/2022/10/ICC-announces-complete-schedule-of-2023-Womens-T20-World-Cup.jpg',
            content: 'Match details for WIW v AUSW',
            link: '/thirdmatch',
            date: "24-08-2024"
        }
    ];

    const handleCardClick = (match) => {
        navigate("/match-details", { state: { match } });
    };

    return (
        <div className='match-container'>
            {selectedCard && (
                <div className="blink">
                    <span>{selectedCard}</span>
                </div>
            )}
            <div className="home-page">
                {matchesList.map(match => (
                    <div key={match.id} onClick={() => handleCardClick(match)} className="home-page-card">
                        <img src={match.imageUrl} alt={match.title} className="card-image" />
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
