let shuffledTasks = [];
let chosenNumbers = [];

function startGame() {
  let members = parseInt(document.getElementById("members").value);
  let tasks = document.getElementById("tasks").value.split("\n").filter(t => t.trim() !== "");

  if (!members || tasks.length === 0) {
    alert("Enter valid data");
    return;
  }

  // shuffle tasks
  shuffledTasks = tasks.sort(() => Math.random() - 0.5);

  chosenNumbers = [];

  // create number buttons
  let numberHTML = "<h3>Pick a Number</h3>";
  for (let i = 1; i <= members; i++) {
    numberHTML += `<button onclick="pickNumber(${i}, this)">${i}</button> `;
  }

  document.getElementById("numberSection").innerHTML = numberHTML;
  document.getElementById("result").innerHTML = "";
}

function pickNumber(num, btn) {
  if (chosenNumbers.includes(num)) return;

  chosenNumbers.push(num);
  btn.disabled = true;
}

function revealTasks() {
  if (chosenNumbers.length === 0) {
    alert("No one picked numbers");
    return;
  }

  let output = "<h3>Results:</h3>";

  chosenNumbers.forEach((num, index) => {
    let task = shuffledTasks[index] || "No task";
    output += `Number ${num} → ${task} <br>`;
  });

  document.getElementById("result").innerHTML = output;
}