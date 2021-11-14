start = document.querySelector("#startbutton");
var buttonContainer = document.querySelector("#buttonContainer");
var questionContainer = document.querySelector("#questionsContainer")
startPage = document.querySelector("#startpage");
var currenttime = document.querySelector("timer");
var gameCompleted = false;
var timeleft = 75;
var questioncount = -1;

var correctAnswer = 0;


var questionText = document.createElement("h1");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");



/////created elements for question building
////var of h1
////vars of buttons



start.addEventListener("click", function(){
    //Remove whats on the screen to start game
    
    startPage.setAttribute("style", "display:none;");
    
    //timer that counts for score
    timerScore();
    
    //timer begins and then this loops till done
    //Function that builds a question
    //listening for the answer removes question 


    //builds next question one
    questioncount++;
    
    buildQuestions(questioncount);
});

function timerScore() {
    var countdown = setInterval(function() {
        if((timeleft > 0)&&(!gameCompleted)) { 
            
            timeleft--;
            timer.textContent = "Time: " + timeleft;
        }else{
            clearInterval(countdown);
            // finishscreen();
        }
    }, 1000);
}

var questionsArray = [["Commonly used data types DO NOT include: ",["strings", "booleans", "numbers"],["alerts"]],["The condition in an if / else statement is enclosed within _____.",["quotes", "curly brackets", "square brackets"],["parentheses"]]];


function buildQuestions(count) {
    questionText.textContent = questionsArray[count][0];
    questionContainer.appendChild(questionText);
    var currentAnswers = questionsArray[count][1];
    correctAnswer = getRandomInt(3);
    currentAnswers.splice(correctAnswer, 0, questionsArray[count][2][0]);
    console.log(currentAnswers);
    answer1.textContent = "1. " + currentAnswers[0];
    answer2.textContent = "2. " + currentAnswers[1];
    answer3.textContent = "3. " + currentAnswers[2];
    answer4.textContent = "4. " + currentAnswers[3];
    
    if(count === 0){
        buttonContainer.appendChild(answer1);
        buttonContainer.appendChild(answer2);
        buttonContainer.appendChild(answer3);
        buttonContainer.appendChild(answer4);
        answer1.setAttribute("class", "button");
        answer2.setAttribute("class", "button");
        answer3.setAttribute("class", "button");
        answer4.setAttribute("class", "button");
    }

    //make an array to hold the current questions on the screen
    ///push the last array randomly into second array
    //have a listener on the container 
    //use .target to make sure it was a button
    //compare to see if it was right 
    //time deduct if wrong
    //changescreen by making count go up
}

///listenr function for the question
buttonContainer.addEventListener("click", function(event){
    var selectedanswer = event.target;
    if()

});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}