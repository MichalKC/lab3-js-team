const zespol = [
['Cichocki', 'Michał', '2', '21436@student.ans-elblag.pl', '21436'], // Osoba A
['Gutowska', 'Marta', '2', '21483@student.ans-elblag.pl', '21483'] // Osoba B
];
const nazwiska = zespol[0][0] + ', ' + zespol[1][0];
document.getElementById('nazwisko').textContent = nazwiska;