function checkAnswer() {
  const userInput = document.getElementById("answerInput").value.trim().toLowerCase();
  const resultElement = document.getElementById("result");

  if (userInput === "help") {
   window.location.href = "suite.html";  
  } 
  else {
    resultElement.textContent = "Ce n’est pas la bonne réponse.";
    resultElement.style.color = "red";
  }
}
