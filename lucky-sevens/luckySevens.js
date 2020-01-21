// Name: Matthew Gerszewski
// Date Created: Jan 16, 2020
// Date last modified: Jan 21, 2020
// Most recent revision: 0

function validate() {
  // Purpose - First, errors are cleared. Then, input is verified as valid by making sure it is a positive number. If the input is not valid an error class name is attached to the parent element of the Starting Bet input field. (This error may be cleared by the clearErr() function on the next call. See clearErr() function below.) If input is valid, next the playUntilBroke function is called to evaluate the outcome of a Lucky Sevens rule set as described here https://lms.thesoftwareguild.com/courses/281/pages/code-practice-lucky-sevens?module_item_id=35721.
  
  clearErr();
  var startingBet = parseInt(document.forms["startingBetForm"]["startingBet"].value, 10);

  if(isNaN(startingBet) || startingBet <= 0) {
    alert("In order to play the game, you must have a starting bet that is greater than $0.");
    document.forms["startingBetForm"]["startingBet"].parentElement.className = "form-inline has-error";
    document.forms["startingBetForm"]["startingBet"].focus();
    return false;
  }

  playUntilBroke(startingBet);

  return false;
  // Returning false to the form that calls this function prevents the form from being submitted and the page from being updated. This in turn allows us to view the results title and table.
}

function clearErr() {
  // Purpose - An error class name may be attached to the parent element of the Starting Bet input field in the event the user enters an invalid starting bet. This function clears that class name error when called.
  
  if(document.forms["startingBetForm"]["startingBet"].parentElement.className.indexOf("has-error") != -1) {
    document.forms["startingBetForm"]["startingBet"].parentElement.className = "form-inline"
  }
}

function rollDice(numberOfSides) {
  // Purpose - Returns a random value between 1 and the number specified (numberOfSides).

  return Math.floor(Math.random() * numberOfSides) + 1;
}

function playUntilBroke(startingBet) {
  // Purpose - Evaluates the outcome of a Lucky Sevens rule set as described:
  //            1. As long as there is money, play the game.
  //            2. Each round, the program rolls a virtual pair of dice for the user.
  //                * If the sum of the 2 dice is equal to 7, the player wins $4.
  //                * Otherwise, the player loses $1.
  // While evaluating outcome of Lucky Sevens game various quantities are tracked, including "total rolls before going broke", "highest amount won", and "rolls count at highest amount won". The function then displays a results table that is hidden on initial loading of the page. Updates play button to invite user to play again.

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
  document.getElementById("result").style.textAlign = "left";
  document.getElementById("resultsHead").style.display = "block";
  document.getElementById("initialBet").innerText = startingBet;
  document.getElementById("totalRolls").innerText = rollCounter;
  document.getElementById("maxAmount").innerText = maxAmount;
  document.getElementById("rollCountAtMaxAmount").innerText = rollCountAtMaxAmount;
  document.getElementById("playButton").innerText = "Play Again"
}