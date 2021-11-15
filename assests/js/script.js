//turning containers into variables to use in functions
var start = document.querySelector("#startbutton");
var buttonContainer = document.querySelector("#buttonContainer");
var questionContainer = document.querySelector("#questionsContainer");
var startPage = document.querySelector("#startpage");
var scorescreen = document.querySelector("#scoring");

//incomplete local storage
scoreStorage = window.localStorage;

//timer elements and variables
var currenttime = document.querySelector("#timerContainer");
var gameCompleted = false;
var timeleft = 75;

//elements and variables for questions
var correctAnswer = 0;
var questioncount = 0;
var questionText = document.createElement("h1");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");


//elements for score screen
var scoretext = document.createElement("h1");
var intialsinput = document.createElement("input");
var submitbutton = document.createElement("button");
var highscoresArray = [];

//start button listener that triggers the game
start.addEventListener("click", function(){

    //Remove whats on the screen to start game
    startPage.setAttribute("style", "display:none;");

    //Timer starts
    timeleft = 75;
    timerScore();

    
    
    buildQuestions(questioncount);
});
 //timer begins and then loops till game is finished
function timerScore() {
    var countdown = setInterval(function() {
        if((timeleft >= 0)&&(!gameCompleted)) { 
            timer.textContent = "Time: " + timeleft;
            timeleft--;
            
        }else{
            clearInterval(countdown);
            scoring();
        }
    }, 1000);
}
//Array the holds the answers and questions as so [question#[question,[wrong answers], [correct answer]]]
var questionsArray = [["Commonly used data types DO NOT include: ",["strings", "booleans", "numbers"],["alerts"]],["The condition in an if / else statement is enclosed within _____.",["quotes", "curly brackets", "square brackets"],["parentheses"]],["Arrays in JavaScript can be used to store ____.",["numbers and strings", "other arrays", "booleans"],["any data type"]],["String values must be enclosed within ___ when being assigned to variables. ",["commas", "curly brackets", "parentheses"],["quotes"]],["A very useful tool used during development and debugging for printing content to the debugger is: ",["JavaScript", "terminal / bash", "for loops"],["console.log"]]];

//Function that builds questions and answer pages
function buildQuestions(count) {
    //Showing containers for questions and answers
    buttonContainer.setAttribute("style", "display:block");
    questionContainer.setAttribute("style", "display:block");
    //grabbing the current questions and answers
    questionText.textContent = questionsArray[count][0];
    questionContainer.appendChild(questionText);
    var currentAnswers = questionsArray[count][1];
    //randomizing position of the correct answer
    correctAnswer = getRandomInt(3);
    currentAnswers.splice(correctAnswer, 0, questionsArray[count][2][0]);
    console.log(currentAnswers);
    answer1.textContent = "1. " + currentAnswers[0];
    answer2.textContent = "2. " + currentAnswers[1];
    answer3.textContent = "3. " + currentAnswers[2];
    answer4.textContent = "4. " + currentAnswers[3];
    //For the first question setting style and appending child to show the questions and answers
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
}

///listenr function for the question
buttonContainer.addEventListener("click", function(event){
 
    var selectedanswer = event.target;
    var selectedanswernumber = selectedanswer.getAttribute("data-number");
   //compare to see if it was right 
    if(selectedanswernumber == (correctAnswer+1)){
        questioncount++;
        if(questioncount < questionsArray.length){
            //reclying the function to build the next
            buildQuestions(questioncount);
        }else{
            gameCompleted = true;
            scoring();
        }
    }else{
        //time deduct if wrong
        questioncount++;
        timeleft -= 10;
        if(questioncount < questionsArray.length){
            //reclying the function to build the next
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
//attempt at scoring page incomplete
function scoring() {
    buttonContainer.setAttribute("style", "display:none");
    questionContainer.setAttribute("style", "display:none");
    currenttime.setAttribute("style", "display:none");
    scorescreen.setAttribute("style", "display:block");
    intialsinput.setAttribute("type", "text");
    scoretext.textContent = "Your score is " + timeleft + ", add your intials and press enter to save your score";
    submitbutton.textContent = "Submit";
    submitbutton.setAttribute("class", "button");
    submitbutton.setAttribute("style", "width:fit-content");
    submitbutton.setAttribute("type", "submit");
    scorescreen.appendChild(scoretext);
    scorescreen.appendChild(intialsinput);
    scorescreen.appendChild(submitbutton);
    intialsinput.value = "";
    scorescreen.addEventListener("click", function(){
        currentinputscore = [];
        if(intialsinput.value != ""){
        currentinputscore.push(intialsinput.value, timeleft);
        console.log(currentinputscore);
        highscoresArray.push(currentinputscore);
        scoreStorage.setItem(highscoresArray, 0);
        scorescreen.setAttribute("style", "display:none");
        startPage.setAttribute("style", "display:block");
        currenttime.setAttribute("style", "display:block");
        timeleft = 75;
        timer.textContent = "Time: " + timeleft;
        questioncount = 0;
        gameCompleted = false;
        }
    });
}



