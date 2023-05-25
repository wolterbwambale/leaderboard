import refreshScores from './refresh.js';

const gameId = 'nUmVSNOOwNIcpsSaDbB4';
export const createForm = () => {
  const div = document.createElement('div');
  div.className = 'input';

  const h2 = document.createElement('h2');
  h2.textContent = 'Add your score';

  const form = document.createElement('form');
  form.action = '#';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'fname';
  nameInput.name = 'fname';
  nameInput.placeholder = 'Your name';

  const scoreInput = document.createElement('input');
  scoreInput.type = 'text';
  scoreInput.id = 'lname';
  scoreInput.name = 'lname';
  scoreInput.placeholder = 'Your score';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';

  form.appendChild(h2);
  form.appendChild(nameInput);
  form.appendChild(scoreInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitButton);

  div.appendChild(form);
  document.getElementById('main').appendChild(div);
};

export const submitScore = async (name, score) => {
  const resource = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

  try {
    const response = await fetch(resource, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Score submitted:', data);
      refreshScores();
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
