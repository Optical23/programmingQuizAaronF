start = document.querySelector("#startbutton");
var buttonContainer = document.querySelector("#buttonContainer");
startPage = document.querySelector("#startpage");
var currenttime = document.querySelector("timer");
var timeleft = 0;
/////created elements for question building
////var of h1
////vars of buttons


start.addEventListener("click", function(){
    //Remove whats on the screen to start game
    
    startPage.setAttribute("style", "display:none;");
    
    //timer that counts for score
    timeleft = 70;
    timerScore();
    
    //timer begins and then this loops till done
    //Function that builds a question
    /////function(){
        //
    //}
    //listening for the answer removes question 


    //builds next question one
    var answer1 = document.createElement("button");
    buttonContainer.appendChild(answer1);
    
});

function timerScore() {
    var countdown = setInterval(function() {
        if(timeleft > 0) {
            timeleft--;
            timer.textContent = timeleft;
        }else{
            clearInterval(countdown);
            // finishscreen();
        }
    }, 1000);
}