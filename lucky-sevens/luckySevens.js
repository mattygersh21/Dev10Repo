// Name: Matthew Gerszewski
// Date Created: Jan 16, 2020
// Most recent revision: 0

function validate() {
  clearErr();
  var startingBet = parseInt(document.forms["startingBetForm"]["startingBet"].value);

  if(isNaN(startingBet) || startingBet <= 0) {
    alert("In order to play the game, you must provide an amount that is greater than $0.");
    document.forms["startingBetForm"]["startingBet"].className = "form-control text-center w-50 has-error";
    document.forms["startingBetForm"]["startingBet"].focus();
    return false;
  }

  playUntilBroke(startingBet);

  return false
}

function clearErr() {
  if(document.forms["startingBetForm"]["startingBet"].className.indexOf("has-") != -1) {
    document.forms["startingBetForm"]["startingBet"].className = "form-control text-center w-50"
  }
}

function rollDice(numberOfSides) {
  return Math.floor(Math.random() * numberOfSides) + 1;
}

function playUntilBroke(startingBet) {
  var gameMoney = startingBet;
  var maxAmount = startingBet;
  var rollCountAtMaxAmount = 0;
  var rollCounter = 0;

  while(gameMoney > 0) {
    rollCounter += 1;
    if(rollDice(6) + rollDice(6) === 7) {
      gameMoney += 4;
    } else {
      gameMoney -= 1;
    }

    if(gameMoney > maxAmount) {
      maxAmount = gameMoney;
      rollCountAtMaxAmount = rollCounter
    }
  }

  document.getElementById("result").style.display = "inline-block";
  document.getElementById("resultsHead").style.display = "block";
  document.getElementById("initialBet").innerText = startingBet;
  document.getElementById("totalRolls").innerText = rollCounter;
  document.getElementById("maxAmount").innerText = maxAmount;
  document.getElementById("rollCountAtMaxAmount").innerText = rollCountAtMaxAmount;
  document.getElementById("playButton").innerText = "Play Again"
}