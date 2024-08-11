import React from 'react';
import { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <section>
      <h2>Search Starships</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search Term: </label>
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter starship name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;
