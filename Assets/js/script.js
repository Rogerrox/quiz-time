var startButton = document.querySelector(".start-button")
var timer;
var timerCount=80

//questions

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }


 //Event Listener that utilze the first function 

// start time function with a timer and go to next function, 

function startQuiz(){
  timer = setInterval(clock,1000)

//Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // function two callout
  }

function clock(){
 //Set timer
 
   timerCount--;
   timerElement.textContent = timerCount;
   
  
// Tests if time has run out
  if (timerCount === 0) {

   loseGame();
   }  
  
}



startButton.addEventListener("click",startQuiz);