'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1);      //this will generate the random number
let Score = 20;
let HighScore = 0;

function Logic(msg){
    document.querySelector(".message").textContent = msg;
        Score--;
        document.getElementById("score").innerHTML = Score;
}

document.getElementById("score").innerHTML = Score;
document.getElementById("highScore").innerHTML = HighScore;
// console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function(){
    let val = parseInt(document.querySelector(".guess").value);
    console.log(typeof(secretNumber));
    console.log(typeof(val));
    console.log(val);
    console.log(secretNumber);
    // debugger;
    if(val < secretNumber){
        Logic("Too Low...😒");
    }
    if(val > secretNumber){
        Logic("Too High...😒");
    }
    if(val == secretNumber){
        document.querySelector(".message").textContent = "Congratulations you guessed the number...🎉🎉🎉";
        if(Score > HighScore)
            HighScore = Score;
        document.getElementById("highScore").innerHTML = HighScore;
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
    }
    
    
});

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?"; 
    document.querySelector(".guess").value = null;
    console.log(document.querySelector(".guess").textContent);
    Score = 20;
    document.getElementById("score").innerHTML = Score;
    secretNumber = Math.trunc((Math.random() * 20) + 1);      //this will generate the random number
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})

