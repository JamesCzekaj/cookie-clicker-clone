var cookie = document.querySelector("#cookie");
var scoreDisplay = document.querySelector("#scoreDisplay");
var autoClickButton = document.querySelector("#autoClickButton");

var score = 0;

cookie.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
})

var hasAutoClick = false;

autoClickButton.addEventListener("click", function() {

  if (score >= 50 && hasAutoClick === false) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    this.classList.add("disabled", "disabled");
    this.textContent = "Auto Click - Purchased";
    hasAutoClick = true;
  } else if (score < 50 && hasAutoClick === false) {
    alert("You don't have enough cookies!");
  }
})
