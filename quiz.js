document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  let results = "";
  if (document.querySelector('input[name="q1"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;

  const checkboxes = document.querySelectorAll('input[name="q3"]:checked');
  let correct = [...checkboxes].filter(c => ["xss", "sql"].includes(c.value)).length === 2 && checkboxes.length === 2;
  if (correct) score++;

  if (document.querySelector('input[name="q4"]').value.toLowerCase().includes("cross")) score++;

  results = `<p>Your score is ${score}/4</p>`;
  document.getElementById("results").innerHTML = results;
});
function restartQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("results").innerHTML = "";
}
