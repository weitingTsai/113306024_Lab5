document.getElementById('submitBtn').addEventListener('click', function () {
  const mathGrade = parseFloat(document.getElementById('mathGrade').value);
  const englishGrade = parseFloat(document.getElementById('englishGrade').value);

  if (isNaN(mathGrade) || isNaN(englishGrade)) {
    alert('Please enter valid numbers!');
    return;
  }

  const tableBody = document.querySelector('#gradesTable tbody');
  const newRow = document.createElement('tr');
  const average = ((mathGrade + englishGrade) / 2).toFixed(2);

  const rowCount = tableBody.children.length + 1;

  newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${mathGrade}</td>
    <td>${englishGrade}</td>
    <td>${average}</td>
  `;
  tableBody.appendChild(newRow);

  updateAverages();
});

function updateAverages() {
  const rows = document.querySelectorAll('#gradesTable tbody tr');
  let mathSum = 0, englishSum = 0, overallSum = 0;

  rows.forEach(row => {
    const math = parseFloat(row.children[1].textContent);
    const english = parseFloat(row.children[2].textContent);
    const avg = parseFloat(row.children[3].textContent);

    mathSum += math;
    englishSum += english;
    overallSum += avg;
  });

  const count = rows.length;
  document.getElementById('mathAvg').textContent = (mathSum / count).toFixed(2);
  document.getElementById('englishAvg').textContent = (englishSum / count).toFixed(2);
  document.getElementById('overallAvg').textContent = (overallSum / count).toFixed(2);
}
