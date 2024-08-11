const BASE_URL = 'https://swapi.dev/api/starships/';

const searchStarships = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}?search=${searchTerm}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { searchStarships, fetchStarships };
