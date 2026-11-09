const zespol = [
['Cichocki', 'Michał', '2', '21436@student.ans-elblag.pl', '21436'], // Osoba A
['???', '???', '?', '???', '???'] // Osoba B
];
const nazwiska = zespol[0][0] + ', ' + zespol[1][0];
document.getElementById('nazwisko').textContent = nazwiska;