import React from 'react';
import { useLocation } from 'react-router-dom';

const MatchDetails = () => {
    const location = useLocation();
    const { match } = location.state;

    return (
        <div>
            <h1>Match Details</h1>
            <div>
                <h2>{match.title}</h2>
                <img src={match.imageUrl} alt={match.title} style={{ maxWidth: '100%' }} />
                <p>{match.content}</p>
                <p>{match.date}</p>
            </div>
        </div>
    );
};

export default MatchDetails;
