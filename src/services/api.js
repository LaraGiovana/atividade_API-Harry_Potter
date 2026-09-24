const BASE_URL = 'https://hp-api.onrender.com/api';

export async function getCharacters() {
  const response = await fetch(BASE_URL + '/characters');
  const data = await response.json();
  return data;
}