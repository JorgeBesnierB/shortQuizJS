//array with questions that will be used in the quiz.
const quizQuestions = [
  {   
    q: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<scripting>",
    r: "2"
  },
  {
    q: "What is the correct syntax for referring to an external script called xxx.js?",
    a: "<script src='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script href='xxx.js'>",
    r: "0"
  },
  {
    q: "How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alert('Hello World');",
    c: "alertBox('Hello World');",
    r: "1"
  },
  {
    q: "How do you create a function in JavaScript?",
    a: "function = myFunction()",
    b: " function:myFunction()",
    c: "function myFunction()",
    r: "2"
  },
  {
    q: "How do you call a function named 'myFunction'?",
    a: "myFunction()",
    b: "call myFunction()",
    c: "call function myFunction()",
    r: "0"
  }
];


//get dom elements to load the timer and quiz.
const startBtn = document.getElementById('startQuiz'); //we are using a unique id


//get dom elements to load the question.
const questionHeder = document.getElementById("questionHeder");
const currentQuestion = document.getElementById("currentQuestion");
const quizSec = document.getElementById('forms'); 
const questionAns = document.querySelectorAll(".ans");

//element for quiz options
const a = document.getElementById("aL");
const b = document.getElementById("bL");
const c = document.getElementById("cL");

const subBtn = document.getElementById("subBtn");

var questionCounter = 0;

//Loads the next question to the dom
function getQuestion(){
  questionHeder.textContent = 'Question: ' + (questionCounter + 1) + ' of 5'
  currentQuestion.textContent = quizQuestions[questionCounter].q;
  a.textContent = quizQuestions[questionCounter].a;
  b.textContent = quizQuestions[questionCounter].b;
  c.textContent = quizQuestions[questionCounter].c;
  let checkSelected = checkSelecteda();
  console.log('aqui', checkSelected);
  questionAns[checkSelected].checked = false;
}

function getAnswer(){

}

function checkSelecteda(){
  console.log('entre');
  for (let i = 0; i < questionAns.length; i++) {
    if (questionAns[i].checked) {
      return i; //answer is selected
    }
  }
  return -1; //no answer is selecte and wont go to next question
}


//Changes the question
document.getElementById("subBtn").onclick = function () {
  console.log(checkSelecteda());
  if (checkSelecteda() !== -1){ //Verifies that the answer has been selected.
    questionCounter++;
    if (questionCounter< 5){
      getQuestion();
      if(questionCounter === 4){
        subBtn.textContent = 'Finish'
      }
    }
    else{
      console.log('show score')
    }
  }
};

//Loads the fist question when the quiz is loaded
document.getElementById("startQuiz").onclick = function () {
  startBtn.setAttribute('style', 'visibility: hidden')
  quizSec.setAttribute('style', 'visibility: ')
  getQuestion();
  setTime();
};