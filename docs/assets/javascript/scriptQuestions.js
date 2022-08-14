//array with questions that will be used in the quiz.
const quizQuestions = [
  {   
    q: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<scripting>",
    r: "c"
  },
  {
    q: "What is the correct syntax for referring to an external script called xxx.js?",
    a: "<script src='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script href='xxx.js'>",
    r: "a"
  },
  {
    q: "How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alert('Hello World');",
    c: "alertBox('Hello World');",
    r: "b"
  },
  {
    q: "How do you create a function in JavaScript?",
    a: "function = myFunction()",
    b: " function:myFunction()",
    c: "function myFunction()",
    r: "c"
  },
  {
    q: "How do you call a function named 'myFunction'?",
    a: "myFunction()",
    b: "call myFunction()",
    c: "call function myFunction()",
    r: "a"
  }
];


//get dom elements to load the timer and quiz.
const startBtn = document.getElementById('startQuiz'); //we are using a unique id
const quizSec = document.getElementById('forms'); 

//get dom elements to load the question.
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const text = "";
var a = document.createElement("a");



function clearData(){

}

function getQuestion(){

}

function getAnswer(){

}

function checkSelected(){

}

document.getElementById("subBtn").onclick = function () {
  console.log('load next question')
};

document.getElementById("startQuiz").onclick = function () {
  startBtn.setAttribute('style', 'visibility: hidden')
  quizSec.setAttribute('style', 'visibility: ')
  setTime();
};