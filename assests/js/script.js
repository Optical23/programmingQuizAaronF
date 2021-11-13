start = document.querySelector("#startbutton");
var buttonContainer = document.querySelector("#buttonContainer")

start.addEventListener("click", function(){
    var answer1 = document.createElement("button");
    buttonContainer.appendChild(answer1);
});