var startButton = document.querySelector(".start-button")
var timer;


//questions

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }




  
//The startGame function is called when the start button is clicked
function startGame(){
    isWin = false;
    timerCount = 80;
//Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer(){
 //Set timer
 timer = setInterval(function(){
   timerCount--;
   timerElement.textContent = timerCount;
   if(timerCount >= 0){
  // Tests if win condition is met
      if (isWin && timerCount > 0) {
    // Clears interval and stops timer
       clearInterval(timer);
        winGame();
    }
 }
// Tests if time has run out
  if (timerCount === 0) {
  // Clears interval
   clearInterval(timer);
   loseGame();
   }  
  }, 1000);
}



startButton.addEventListener("click",startGame);