const startQuizButton = document.getElementById('startQuiz');

startQuizButton.addEventListener('click', function() {
    startQuiz()
});

function startQuiz() {
    let score = 0;
    for (const question of questions) {
        const answer = prompt(question[0], '');
        if (answer !== null && answer.trim() !== '' && Number(answer) === question[1]) {
            alert('Prawidłowa odpowiedź!');
            score++;
        } else {
            alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
        }
    }
    const wynikElement = document.getElementById('wynik');
    wynikElement.textContent = 'Twój wynik: ' + score + '/' + questions.length;
}

const questions = [
['Ile księżyców ma Ziemia?', 1],
['Ile księżyców ma Mars?', 2],
['Ile księżyców ma Wenus?', 0]
['Ile księżyców ma Neptun?', 2],
['Ile księżyców ma Uran?', 0]
];