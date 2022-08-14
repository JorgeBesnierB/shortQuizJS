//User name process
const userNameInput = document.getElementById("userName");

function storeScore(){
  let storedValue = localStorage.getItem('arrHistoricScores');
  let arrHistoricScores = [];
  let currentScore = {userName: userNameInput.value, scoreUser: score}

  if(storedValue){
    arrHistoricScores = JSON.parse(storedValue);
  }

  //create object with current score
  arrHistoricScores.push(currentScore);

  //send array as string to local storage
  localStorage.setItem("arrHistoricScores", JSON.stringify(arrHistoricScores));
}

//Loads the fist question when the quiz is loaded
document.getElementById("submitName").onclick = function () {
    console.log(userNameInput.value, score);
    storeScore();
    document.location.href = "index.html";
};