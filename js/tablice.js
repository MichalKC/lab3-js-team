const tablica = [
    "Bigos",
    "Pierogi",
    "Devolai",
    "Schabowe",
    "Barszcz"
]

console.log(tablica);
console.table(tablica);
alert(tablica[1]);

tablica[tablica.length - 1] = "Rosół";
// tablica.length zwraca długość tablicy, a ostani element ma indeks o 1 mniejszy od długości ponieważ liczenie indeksów zaczyna się od 0

tablica[5] = "Pomidorowa"; // przez indeks
console.log(tablica.length)

tablica[tablica.length] = "Spaghetti" // przez długość
console.log(tablica.length)

tablica.push("Pączek, Kapuśniak, Gulasz, Mielone") // metodą push

tablica[20] = 'daleko';
console.log(tablica.length)
// widać 'undefined', wypisana długość: 21

const nowaDlugosc = tablica.unshift("Zupa owocowa, Carbonara");
console.log(nowaDlugosc);

document.write('<p>Tablica: ' + tablica.join(', '));
document.write(' (elementów: ' + tablica.length + ')</p>');

document.write('<p>Czy tablica zawiera element "Pomidorowa"?<p>')
document.write('<p> Zawiera: ' + tablica.includes("Pomidorowa") + ' gdzie: ' + tablica.indexOf("Pomidorowa"))

const nowaTablica = [
    "Science Fiction",
    "Horror",
    "Romans",
    "Polityka",
    "Bajka"
]

document.write('<p>Pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');
document.write((nowaTablica.length - 1) + '</strong></p>');

nowaTablica.unshift("Komedia");
document.write(nowaTablica[0] + '</strong></p>');

let usunietyA = nowaTablica.pop();
let usunietyB = nowaTablica.shift();
document.write("<p>Usunięto z końca (pop): <b>" + usunietyZKonca + "</b></p>");
document.write("<p>Usunięto z początku (shift): <b>" + usunietyZPoczatku + "</b></p>");
document.write('<p>Tablica: ' + tablica.join(', '));

const oceny = [
['JavaScript', 5],
['Git', 4],
['HTML', 5]
];
console.log(oceny[1]); // ['Git', 4]
console.log(oceny[1][0]); // 'Git' – pierwszy indeks: który wiersz,
console.log(oceny[1][1]); // 4
