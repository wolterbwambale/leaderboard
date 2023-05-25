/* eslint-disable */
import displayScores from './display.js';

const gameId = 'nUmVSNOOwNIcpsSaDbB4';
const refreshScores = async () => {
  const resource = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  try {
    const response = await fetch(resource);
    const data = await response.json();
    console.log(data);
    displayScores(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default refreshScores;
