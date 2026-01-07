

let computerNum =0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultText = document.querySelector(".result-text");
let resetButton = document.querySelector("reset-button");
let resultAreaImg = document.querySelector(".main-img");
let chances = 5;
let gameover = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function(){userInput.value="";})


//랜덤숫자 뽑기
function pickRandomNum(){
    computerNum = Math.floor(Math.random() *100)+1;
    console.log("정답",computerNum);
} 

function play(){

    //숫자 추측하기
    let userValue = userInput.value;
    
    if(userValue<1 || userValue>100){
        resultText.textContent = "1과 100사이 숫자를 입력해주세요."
        return;
    }

    if(history.includes(userValue)){
        resultText.textContent = "이미 입력한 숫자입니다."
        return;
    }

    chances --;
    chanceArea.innerHTML = `남은기회:${chances}`;
    console.log("chance",chances);

    if(userValue < computerNum){
        resultAreaImg.src ="https://img.freepik.com/premium-vector/up-arrow-graphic-gradient-purple-blue-letter-u-p-isolated-vector-illustration_213497-3985.jpg?semt=ais_hybrid&w=740&q=80";
        resultText.textContent = "UP";
    }else if(userValue > computerNum){
        resultAreaImg.src ="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/8d6498e9ca294113a12b95f294df0f6f?ik-sanitizeSvg=true"
        resultText.textContent = "DOWN";
    }else{
        resultText.textContent = "정답";
        gameover = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances == 0){
        gameover = true;
    }

    if(gameover == true){
        playButton.disabled = true;
    }
}


//리셋
function reset(){
    
    userInput.value = "";
    resultAreaImg.src = "https://i.pinimg.com/236x/85/82/5c/85825c0d3b14e88b4823ff4456f34eeb.jpg";
    pickRandomNum();
    resultText.textContent = "결과값이 여기 나옵니다";
    chances = 5;
    chanceArea.innerHTML = `남은기회:${chances}`;
}


pickRandomNum();