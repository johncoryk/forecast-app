import React from 'react';

import './styles/card.scss';

import {
  WiStormShowers,
  WiCloudy,
  WiSprinkle,
  WiShowers,
  WiSnow,
  WiDaySunny,
} from 'react-icons/wi';

const Card = ({ city, country, temp, condition, error }) => {
  return (
    <div className="card-container">
      <div className="icon">
        {' '}
        {condition && condition.includes('thunderstorm') && <WiStormShowers />}
        {condition && condition.includes('rain') && <WiShowers />}
        {condition && condition.includes('drizzle') && <WiSprinkle />}
        {condition && condition.includes('snow') && <WiSnow />}
        {condition && condition.includes('cloud') && <WiCloudy />}
        {condition && condition.includes('clear') && <WiDaySunny />}
      </div>
      {city && country && (
        <h2 className="cityCountry">
          {city}, {country}
        </h2>
      )}
      {temp && <h3 className="temp">{temp} °F</h3>}
      {condition && (
        <h3>
          {condition
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1) + ' ')}
        </h3>
      )}
      {error && <h3 className="error">{error}</h3>}
    </div>
  );
};

export default Card;
