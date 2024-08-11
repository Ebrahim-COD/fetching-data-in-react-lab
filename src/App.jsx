import React, { useEffect, useState } from 'react';
import * as starshipService from './services/starshipService';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await starshipService.fetchStarships(); 
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching!:', error);
      }
    };

    fetchStarships();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const data = await starshipService.searchStarships(searchTerm);
      setStarships(data.results);
    } catch (error) {
      console.error('Error search!:', error);
    }
  };

  return (
    <div>
        <h1>Star Wars API</h1>
        <StarshipSearch onSearch={handleSearch} />
        <StarshipList starships={starships} />
    </div>
  );
};

export default App;
