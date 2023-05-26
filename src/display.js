/* eslint-disable */
   const displayScores = (scores) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    if (!scores || !scores.result) {
      // Handle the case when scores or scores.result is undefined
      const errorDiv = document.createElement('div');
      errorDiv.textContent = 'No scores available';
      resultsDiv.appendChild(errorDiv);
      return;
    }
  
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
  
    nameHeader.style.width = '5%'; 
    scoreHeader.style.width = '70%'; 
  
    const tableRows = table.getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++) {
      const rowCells = tableRows[i].getElementsByTagName('td');
      rowCells[0].style.width = '5%'; 
      rowCells[1].style.width = '70%';
    }
  };
  
  export default displayScores;
  