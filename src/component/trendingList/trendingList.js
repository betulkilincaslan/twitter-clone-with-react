import React from 'react';

const trends = [
    {
        id: '001',
        location: 'worldwide',
        name: 'BLAblabla',
        tweets: '33K'
    },
    {
        id: '002',
        location: 'worldwide',
        name: 'BLUblublu',
        tweets: '23K'
    },
    {
        id: '003',
        location: 'worldwide',
        name: 'BLEbleble',
        tweets: '21K'
    },
    {
        id: '004',
        location: 'worldwide',
        name: 'BLObloblo',
        tweets: '13K'
    },
    {
        id: '005',
        location: 'worldwide',
        name: 'BLIblibli',
        tweets: '4K'
    }
];

const TrendingList = () => {
    return (
        <div className="trends">
            <div className="trends__title">
                <h2>Worldwide Trends</h2>
            </div>
            <ul className="trends__list">
                {trends.map((item, index) => (
                    <li className="trends__item" key={item.id}>
                        <a href="/" className="trends__link">
                            <div className="trends__info">
                                {index + 1} · Trending {item.location}
                            </div>
                            <span className="trends__name">{item.name}</span>
                            <span className="trends__tweets">
                                {item.tweets} Tweets
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrendingList;