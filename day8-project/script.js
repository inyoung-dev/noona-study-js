let randomNumber = 0;
let chances = 3;
let gameOver = false;
let history = [];

let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let historyArea = document.getElementById("history-area");
let chanceArea = document.getElementById("chance-area");
let answer = document.getElementById("answer");


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("keypress", function(event){
    if(event.key === "Enter") {play();}
});
userInput.addEventListener("focus", function() {
    userInput.value = "";
});

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("정답", randomNumber);
    answer.textContent = `${randomNumber}`;
}

function play() {
    let userValue = Number(userInput.value);

    if(userValue < 1 || userValue > 100 || !Number.isInteger(userValue)) {
        resultArea.textContent = "1과 100 사이의 숫자를 입력해 주세요!";
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요!";
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}번`
    if(userValue < randomNumber) {
        resultArea.textContent = "UP!";
    } else if(userValue > randomNumber) {
        resultArea.textContent = "DOWN!";
    } else {
        resultArea.textContent = "축하합니다! 정답이에요!!";
        gameOver = true;
    }

    history.push(userValue);
    history.sort((a,b) => {return a-b});
    historyArea.textContent = `입력한 숫자 : ${history.join(", ")}`;

    if(chances < 1 && !gameOver) {
        gameOver = true;
        resultArea.textContent = `Game Over!`;
    }

    if(gameOver) {
        playButton.disabled = true;
    }
}

function reset() {

    userInput.value = "";
    chances = 3;
    gameOver = false;
    history = [];

    resultArea.textContent = "1과 100 사이의 숫자를 입력해 주세요!";
    chanceArea.textContent = `남은 기회 : ${chances}번`;
    historyArea.textContent = "";
    
    playButton.disabled = false;
    generateRandomNumber();

}

generateRandomNumber();