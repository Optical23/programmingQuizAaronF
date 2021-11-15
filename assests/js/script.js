start = document.querySelector("#startbutton");
var buttonContainer = document.querySelector("#buttonContainer");
var questionContainer = document.querySelector("#questionsContainer");
startPage = document.querySelector("#startpage");
var scorescreen = document.querySelector("#scoring");
var currenttime = document.querySelector("#timerContainer");
var gameCompleted = false;
var timeleft = 75;
var questioncount = 0;

var correctAnswer = 0;

var highscoresArray = [];
var questionText = document.createElement("h1");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

var scoretext = document.createElement("h1");
var intialsinput = document.createElement("input");
var submitbutton = document.createElement("button");




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
    
    buildQuestions(questioncount);
});

function timerScore() {
    var countdown = setInterval(function() {
        if((timeleft >= 0)&&(!gameCompleted)) { 
            timer.textContent = "Time: " + timeleft;
            timeleft--;
            
        }else{
            clearInterval(countdown);
            // finishscreen();
        }
    }, 1000);
}

var questionsArray = [["Commonly used data types DO NOT include: ",["strings", "booleans", "numbers"],["alerts"]],["The condition in an if / else statement is enclosed within _____.",["quotes", "curly brackets", "square brackets"],["parentheses"]],["Arrays in JavaScript can be used to store ____.",["numbers and strings", "other arrays", "booleans"],["any data type"]],["String values must be enclosed within ___ when being assigned to variables. ",["commas", "curly brackets", "parentheses"],["quotes"]],["A very useful tool used during development and debugging for printing content to the debugger is: ",["JavaScript", "terminal / bash", "for loops"],["console.log"]]];


function buildQuestions(count) {
    buttonContainer.setAttribute("style", "display:block");
    questionContainer.setAttribute("style", "display:block");
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
        answer1.setAttribute("data-number", "1");
        answer2.setAttribute("class", "button");
        answer2.setAttribute("data-number", "2");
        answer3.setAttribute("class", "button");
        answer3.setAttribute("data-number", "3");
        answer4.setAttribute("class", "button");
        answer4.setAttribute("data-number", "4");
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
    var selectedanswernumber = selectedanswer.getAttribute("data-number");
   
    if(selectedanswernumber == (correctAnswer+1)){
        questioncount++;
        if(questioncount < questionsArray.length){
            buildQuestions(questioncount);
        }else{
            gameCompleted = true;
            scoring();
        }
    }else{
        questioncount++;
        timeleft -= 10;
        if(questioncount < questionsArray.length){
            buildQuestions(questioncount);
        }else{
            gameCompleted = true;
            scoring();
        }
        
    }  
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function scoring() {
    buttonContainer.setAttribute("style", "display:none");
    questionContainer.setAttribute("style", "display:none");
    timerContainer.setAttribute("style", "display:none");
    intialsinput.setAttribute("type", "text");
    scoretext.textContent = "Your score is " + timeleft + ", add your intials and press enter to save your score";
    submitbutton.textContent = "Submit";
    submitbutton.setAttribute("class", "button");
    submitbutton.setAttribute("style", "width:fit-content");
    submitbutton.setAttribute("type", "submit");
    submitbutton.setAttribute("id", "submitinputfield")
    scorescreen.appendChild(scoretext);
    scorescreen.appendChild(intialsinput);
    scorescreen.appendChild(submitbutton);
    scorescreen.addEventListener("click", function(){
        currentinputscore = [];
        currentinputscore.push()
    });
}



function logscore(event, intials) {
    currentinputscore = [];
    console.log(intials);
    event.preventDefault();

}

