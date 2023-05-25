import '../styles/main.css';
import { createForm, submitScore } from './form.js';
import displayScores from './display.js';
import refreshScores from './refresh.js';

createForm();

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('fname').value;
  const score = document.getElementById('lname').value;
  submitScore(name, score);
  form.reset();
});
displayScores();

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', () => {
  refreshScores();
});
