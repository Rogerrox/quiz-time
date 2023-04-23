var startButton = document.querySelector(".start-button")
var timer;
var timerCount=80

//Questions
var nextBtn =document.querySelector("#next-btn")
var questionEl = document.querrySelector("#questions");
var answerBtn = document.querySelectorAll(".option-btn");
var optionBtnA = document.querrySelector("#a");
var optionBtnB = document.querrySelector("#b");
var optionBtnC = document.querrySelector("#c");
var optionBtnD = document.querrySelector("#d");
var questionEl = document.getElementById("quest");
var randomQuestons = [
  
  {
    question: "Java script handles?"
    options; [
      "Content",
      "format",
      "Design",
      "overall functionality of the application",
     ],

    correctAnswer: "overall functionality of the application" 
  },
  {
    question: "Java script handles?"
    options: [
      "Content",
      "format",
      "Design",
      "overall functionality of the application",
    ],
    correctAnswer: "overall functionality of the application" 
  },
  {
    question: "Java script handles?"
    options: [
      "Content",
      "format",
      "Design",
      "overall functionality of the application",
    ],
    correctAnswer: "overall functionality of the application" 
  },
]




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

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
//   }


//  //Event Listener that utilze the first function 

// // start time function with a timer and go to next function, 

// function startButton(){
//   timer = setInterval(clock,1000)

// //Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     // function two callout
//   }

// function clock(){
//  //Set timer
 
//    timerCount--;
//    timerElement.textContent = timerCount;
   
  
// // Tests if time has run out
//   if (timerCount === 0) {

//    loseGame();
//    }  
  
// }



// startButton.addEventListener("click",startQuiz);