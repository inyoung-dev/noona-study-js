// 랜덤번호 지정
// 유저가 번호 입력하고 go 버튼 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호면 Down!
// 랜덤번호가 > 유저번호면 Up!
// Reset 버튼을 누르면 게임이 리셋된다.
// 3번의 기회를 다 사용하면 게임이 끝난다. (추가 추측 불가, 버튼 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. (기회 소모 X)
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. (기회 소모 X)

let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let correctAnswer = document.getElementById("correct-answer")

playButton.addEventListener("click", play)

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
    correctAnswer.textContent = computerNum;
}


function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "UP!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!"
    }else {
        resultArea.textContent = "맞췄습니다!"
    }
}
pickRandomNum()