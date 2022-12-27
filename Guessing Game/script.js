let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let check = document.querySelector(".check");
let guessNumber = document.querySelector(".guessnumber");
let domScore = document.querySelector(".score");
let domHighScore = document.querySelector(".highscore");
let input = document.querySelector("input");
let startGuessing = document.querySelector("#startguessing");
let body = document.querySelector("body");
let again = document.querySelector(".again");
let h1 = document.querySelector("h1");

guessNumber.innerHTML = randomNumber;
domScore.innerHTML = score;
domHighScore.innerHTML = highscore;

check.addEventListener("click", function(){
    let guessedNumber = input.value;
    if(guessedNumber == ""){
        startGuessing.innerHTML = "No number!";
    }else{
        if(guessedNumber != randomNumber){
            domScore.innerHTML = score--;
            if(guessedNumber < randomNumber){
                startGuessing.innerHTML = "Too Low!";
                domScore.innerHTML = score;
            }else{
                startGuessing.innerHTML = "Too High!";
                domScore.innerHTML = score;
            }
        }
        if(guessedNumber == randomNumber){
            startGuessing.innerHTML = "Correct Number!";
            body.style.backgroundColor = "green";
            input.style.backgroundColor = "green";
            domScore.innerHTML = score;
            domHighScore.innerHTML = score;
        }
        if(score == 0){
            score = 20;
            startGuessing.innerHTML = "You lost the game!";
            body.style.backgroundColor = "red";
            input.style.backgroundColor = "red";
            check.style.visibility = "hidden";
            document.querySelector("h1").innerHTML = "Press Again!";
        }
    }
})

again.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 20 + 1);
    guessNumber.innerHTML = randomNumber;
    domScore.innerHTML = 20;
    startGuessing.innerHTML = "Start guessing...";
    domHighScore.innerHTML = score;
    body.style.backgroundColor = "rgb(39, 37, 37)";
    input.style.backgroundColor = "rgb(39, 37, 37)";
    input.value = "";
    check.style.visibility = "visible";
    h1.innerHTML = "";
});