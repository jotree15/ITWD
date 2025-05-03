
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  let total = 5;
  const results = document.getElementById("results");
  results.innerHTML = "";

  const answers = {
    q1: "c",
    q2: "c",
    q3: "b",
    q4: "Authentication",
    q5: ["a", "b", "d"]
  };

  // Question 1
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === answers.q1) score++;
  results.innerHTML += `<p>Q1: ${q1 ? q1.value : "No answer"} - ${q1 && q1.value === answers.q1 ? "Correct" : "Incorrect"}</p>`;

  // Question 2
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === answers.q2) score++;
  results.innerHTML += `<p>Q2: ${q2 ? q2.value : "No answer"} - ${q2 && q2.value === answers.q2 ? "Correct" : "Incorrect"}</p>`;

  // Question 3
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === answers.q3) score++;
  results.innerHTML += `<p>Q3: ${q3 ? q3.value : "No answer"} - ${q3 && q3.value === answers.q3 ? "Correct" : "Incorrect"}</p>`;

  // Question 4
  const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
  if (q4 === answers.q4.toLowerCase()) score++;
  results.innerHTML += `<p>Q4: ${q4} - ${q4 === answers.q4.toLowerCase() ? "Correct" : "Incorrect"}</p>`;

  // Question 5
  const q5Selections = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(cb => cb.value);
  const correctSet = new Set(answers.q5);
  const selectedSet = new Set(q5Selections);
  const isCorrectQ5 = answers.q5.length === q5Selections.length && answers.q5.every(val => selectedSet.has(val));
  if (isCorrectQ5) score++;
  results.innerHTML += `<p>Q5: ${q5Selections.join(", ")} - ${isCorrectQ5 ? "Correct" : "Incorrect"}</p>`;

  results.innerHTML += `<h3>Total Score: ${score}/${total}</h3>`;
  results.innerHTML += `<h3>${score >= 3 ? "Pass 🎉" : "Fail 😢"}</h3>`;
});

function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("results").innerHTML = "";
}
