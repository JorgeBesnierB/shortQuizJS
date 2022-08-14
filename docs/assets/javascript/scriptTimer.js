//get the html element that will show the timer
var timeEl = document.getElementById('timerDisplay'); //we are using a unique id

//actual timer starting value
var timerValue = 300; //this is equal to 5 minuts (1 min per question)
//Get new time
let minStart = String(parseInt(timerValue/60)); //show the minuts of initial timer updated
let secStart = String(timerValue%60); //show the seconds of initial timer updated
minStart = minStart < 10 ? "0" + minStart : minStart;
secStart = secStart < 10 ? "0" + secStart : secStart;

timeEl.textContent = minStart + ":" + secStart;

//This function is called when the user clicks the start button for the quiz
function setTime(){
    var timerInterval = setInterval(function() {
        timerValue--;

        //Get new time
        let min = String(parseInt(timerValue/60)); //show the minuts of initial timer updated
        let sec = String(timerValue%60); //show the seconds of initial timer updated

        //fomat new time as xx:yy
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        //time is ruuning out with a visual queue
        if (timerValue <= 10 && timerValue%2 === 0){
            timeEl.setAttribute('style', 'background-color: red')
        }
        else{
            timeEl.setAttribute('style', 'background-color: gray')
        }

        //concat minus and seconds with time format using :
        timeEl.textContent = min + ":" + sec;

        if(timerValue === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //INDICATE USER THE TIMER HAS ENDED
            timeEl.textContent = "Time Ended";
            // Calls function to create and append image
            sendMessage();
        }
    }, 1000);
}




