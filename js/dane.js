const zespol = [
['Cichocki', 'Michał', '2', '21436@student.ans-elblag.pl', '21436'], // Osoba A
['Gutowska', 'Marta', '2', '21483@student.ans-elblag.pl', '21483'] // Osoba B
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

function policzZnaki(tekst) {
    return tekst.length;
}

const elementyZDlugoscia = [];
for (const element of nowaTablica) {
    elementyZDlugoscia.push(element + " (" + policzZnaki(element) + ")");
}
document.getElementById("znaki").textContent = elementyZDlugoscia.join(", ");

function pokazDane() {
    const nazwisko = document.getElementById("nazwisko").textContent;
    const imie = document.getElementById("imie").textContent;
    const grupa = document.getElementById("grupa").textContent;
    const email = document.getElementById("email").textContent;
    const indeks = document.getElementById("indeks").textContent;

    alert(
        "Nazwisko: " + nazwisko +
        "\nImię: " + imie +
        "\nGrupa: " + grupa +
        "\nEmail: " + email +
        "\nNr indeksu: " + indeks
    );
}

document.getElementById('pokazDane').addEventListener('click', pokazDane);
