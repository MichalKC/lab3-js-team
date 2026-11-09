const liczbaFormularzy = document.querySelectorAll("form").length;
const liczbaObrazkow = document.querySelectorAll("img").length;
const liczbaOdniesnikow = document.querySelectorAll("a").length;
const liczbaAkapitowProjektu1 = document.querySelectorAll("#projekt1 p").length;

console.log("Formularze na stronie:", liczbaFormularzy);
console.log("Obrazki na stronie:", liczbaObrazkow);
console.log("Odnośniki na stronie:", liczbaOdniesnikow);
console.log("Akapity w sekcji Projekt 1:", liczbaAkapitowProjektu1);

document.querySelector("#licznik").innerHTML =
    `Formularze na całej stronie (&lt;form&gt;, również formularz kontaktowy w ukrytym oknie modalnym): ${liczbaFormularzy}<br>` +
    `Obrazki na całej stronie (&lt;img&gt;): ${liczbaObrazkow}<br>` +
    `Odnośniki na całej stronie (&lt;a&gt;): ${liczbaOdniesnikow}<br>` +
    `Akapity (&lt;p&gt;) w sekcji Projekt 1 (w tym ten akapit oraz akapity wygenerowane w zadaniu „Tablice”): ${liczbaAkapitowProjektu1}`;
