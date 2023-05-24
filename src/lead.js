function createForm() {
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
  nameInput.placeholder = 'your name';
  const scoreInput = document.createElement('input');
  scoreInput.type = 'text';
  scoreInput.id = 'lname';
  scoreInput.name = 'lname';
  scoreInput.placeholder = 'your score';
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';
  form.appendChild(h2);
  form.appendChild(nameInput);
  form.appendChild(scoreInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitButton);
  div.appendChild(form);
  document.body.appendChild(div);
}
createForm();

module.exports = { createForm };
