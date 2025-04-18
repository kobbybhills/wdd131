function checkQuiz() {
    let score = 0;
    let answers = {
        q1: "Maakye",
        q2: "Maaha",
        q3: "Wo din de sɛn?",
        q4: "Nyame nhyira wo.",
        q5: "Ɛhe na wo te?",
    };

    let userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value,
    };

    let correctAnswers = `<div class="answers"><h3>Correct Answers:</h3><ul>`;

    for (let key in answers) {
        correctAnswers += `<li>${answers[key]}</li>`;
        if (userAnswers[key] === answers[key]) {
            score++;
        }
    }

    correctAnswers += `</ul></div>`;

    document.getElementById("result").innerText = "Your score: " + score + "/5";
    document.getElementById("answers").innerHTML = correctAnswers;
}