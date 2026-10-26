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