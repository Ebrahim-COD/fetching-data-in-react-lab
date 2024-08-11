import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <h2>Starship List</h2>
      <p>Total Starships: {starships.length}</p>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
