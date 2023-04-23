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
      "format",
      "Design",
      "overall functionality of the application",
    ],
    correctAnswer: "overall functionality of the application" 
  },
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
]

questionEl.textContent = quizQuestions[0].question
optionBtnA.textContent = quizQuestions[0].options[0]
optionBtnB.textContent = quizQuestions[0].options[1]
optionBtnC.textContent = quizQuestions[0].options[2]
optionBtnD.textContent = quizQuestions[0].options[3]




//var body  document.body;

// var quizQuestionEl = document.createElement('div')

// var questionsEl = document.createElement("ol");
// var li1 =document.createElement("li");
// var li2 =document.createElement("li");
// var li3 =document.createElement("li");
// var li4 =document.createElement("li");

// li1.textContent = "Java script handles?";
// li2.textContent = "If var a = 10 and var b = 10, what is the Value and type?";
// li3.textContent = "The keyword this refers to?";
// li4.textContent = 'What does "i++" stand for in a loop statement?';

// questionsEl.appendChild(li1);
// questionsEl.appendChild(li2);
// questionsEl.appendChild(li3);
// questionsEl.appendChild(li4);

// quizQuestionEl.appendChild(questionsEl);

// quizQuestionEl.textContent = "Quiz"
// console.log("quizQestionEl")


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
 //submit.addEventListener("click",option)