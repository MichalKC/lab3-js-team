const zespol = [
['Cichocki', 'Michał', '2', '21436@student.ans-elblag.pl', '21436'], // Osoba A
['???', '???', '?', '???', '???'] // Osoba B
];
const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];
for (let i = 0; i < pola.length; i++) {

    const element = document.getElementById(pola[i]);
    
    if (element) {
        element.textContent = zespol[0][i] + ', ' + zespol[1][i];
    }
}

const srodek = Math.floor(tablica.length / 2);
let k = 0;
let tekstWhile = "";

while (k < srodek) {
    tekstWhile += tablica[k] + (k < srodek - 1 ? ", " : "");
    k++;
}
document.getElementById("while").textContent = tekstWhile;

let tekstFor = "";
for (let i = srodek; i < tablica.length; i++) {
    tekstFor += tablica[i] + (i < tablica.length - 1 ? ", " : "");
}
document.getElementById("for").textContent = tekstFor;