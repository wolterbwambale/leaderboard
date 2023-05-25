/* eslint-disable */
 const displayScores = (scores) => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  const scoreHeader = document.createElement('th');
  scoreHeader.textContent = 'Score';

  headRow.appendChild(nameHeader);
  headRow.appendChild(scoreHeader);
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement('tbody');

  const { result } = scores;

  result.forEach((score) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = score.user;
    const scoreCell = document.createElement('td');
    scoreCell.textContent = score.score;

    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  resultsDiv.appendChild(table);
};

export default displayScores;