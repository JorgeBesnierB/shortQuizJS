function loadRankings(){
    let storedValue = localStorage.getItem('arrHistoricScores');
    let arrHistoricScores = [];

    if(storedValue){
        arrHistoricScores = JSON.parse(storedValue);
    }

    //sort the array to show it high scores in order.
    arrHistoricScores.sort((a, b) => b.scoreUser - a.scoreUser);

    console.log(arrHistoricScores.length);
    for(let i = 0; i < arrHistoricScores.length; i++){
        html = `<tr> <th scope="row">${i}</th> <td>${arrHistoricScores[i].userName}</td> <td>${arrHistoricScores[i].scoreUser}</td> </tr>`
        console.log(html);
        const ranking = document.getElementById("ranking");
        ranking.innerHTML = ranking.innerHTML + html;
    }
}

document.body.onload = function() {
    loadRankings();
  }

document.getElementById("goToQuiz").onclick = function () {
    location.href = "quiz.html";

};