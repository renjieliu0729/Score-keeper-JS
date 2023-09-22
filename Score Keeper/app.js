const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p2Display = document.querySelector('#p2Display');
const p1Display = document.querySelector('#p1Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#winningscore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener('click',function(){
    if(!isGameOver){
    p1Score = p1Score + 1
    if(p1Score==winningScore){
        isGameOver = true;
        disable_button();
    }
    p1Display.textContent = p1Score;
    }
})


p2Button.addEventListener('click',function(){
    if(!isGameOver){
    p2Score = p2Score + 1
    if(p2Score==winningScore){
        isGameOver = true;
        disable_button();
    }
    p2Display.textContent = p2Score;
    }
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
}

function disable_button(){
    p1Button.disabled = true;
    p2Button.disabled  = true;
}

function enable_button(){
    p1Button.disabled = false;
    p2Button.disabled  = false;
}
resetButton.addEventListener('click',function(){
reset();
enable_button();
})


winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    enable_button();
    reset();
})



