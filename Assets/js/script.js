var startButton = document.querySelector(".start-button");
var submit = document.querySelector("#submit");
var timer;
var timerCount=80

//Questions
var questionsDiv =document.querySelector("#quiz")
var nextBtn =document.querySelector("#next-btn")
var questionEl = document.querySelector("#questions");
var answerBtn = document.querySelectorAll(".option-btn");
var optionBtnA = document.querySelector("#a_text");
var optionBtnB = document.querySelector("#b_text");
var optionBtnC = document.querySelector("#c_text");
var optionBtnD = document.querySelector("#d_text");
var options

var quizQuestions = [
  
  {
    question: "Java script handles?",
    options: [
      "Content",
      "format",
      "Design",
      "overall functionality of the application",
     ],

    correctAnswer: "overall functionality of the application" 
  },
  {
    question: "If var b = 10 and var a = 10, The console log expression for value and type will be?",
      options: [
      "console.log(b=a)",
      "console.log(b!=a)",
      "console.log(b===a)",
      "none of the above",
    ],
    correctAnswer: "console.log(b===a)" 
  },
  {
    question: "The Keyword "-this-" refers to?",
    options: [
      "Console.log",
      "the global object",
      "the window",
      "your computer",
    ],
    correctAnswer: "the global object" 
  },
  {
    question: "What does -itt- stand for in a loop statement?",
    options: [
      "information technology",
      "cousin it",
      "increment an array by 1",
      "start the loop",
    ],
    correctAnswer: "increment an array by 1" 
  },
]

questionEl.textContent = quizQuestions[0].question
optionBtnA.textContent = quizQuestions[0].options[0]
optionBtnB.textContent = quizQuestions[0].options[1]
optionBtnC.textContent = quizQuestions[0].options[2]
optionBtnD.textContent = quizQuestions[0].options[3]

function nextQuestion(){
  console.log("correctAnswer")

  var options = document.querySelectorAll(".options");
for(i=1; i < options.length; i++){
  questionEl.textContent = quizQuestions[i].question
optionBtnA.textContent = quizQuestions[i].options[0]
optionBtnB.textContent = quizQuestions[i].options[1]
optionBtnC.textContent = quizQuestions[i].options[2]
optionBtnD.textContent = quizQuestions[i].options[3]
} 

}
function check(){
  console.log("incorrect")

  var c=0
  var answerQuestion = quizQuestion;
  
}

// renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }


 //Event Listener that utilze the first function 

// start time function with a timer and go to next function, 

function startBtn(){
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
// starts quiz

function startQuiz(){
questionsDiv.removeAttribute("class");
}



 startButton.addEventListener("click",startQuiz);
submit.addEventListener("click",nextQuestion);