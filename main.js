let msg = document.getElementById("msg");
let btn = document.getElementById("btn");
let myWords = document.getElementById("myWords");
let wordTyped = document.getElementById("typed");


let startTime;
let endTime;
let typed;


let a = new Date();

let strings = ["You are here", "We the web Developer", "You the great man is here","Me you the youtube"];

function playGame(){
    let randomNum = Math.floor(Math.random()*strings.length);
    msg.innerHTML = strings[randomNum];
    startTime = a.getSeconds();
    btn.innerHTML = 'Done';
    myWords.value = '';
    alert(startTime);
}

function endGame(){
    let b = new Date();
    btn.innerHTML = 'Start';
    typed = myWords.value;
    endTime = b.getSeconds();
    wordTyped.innerHTML = 'You typed:'+'</br>'+typed;
    result();
    alert(endTime);
}

function result(){
    totalTime = Math.floor((endTime - startTime));
    msg.innerHTML = 'You have taken '+totalTime+' seconds';
}

function start(){
    if(btn.innerHTML == 'Start'){
        myWords.disabled = false;
    playGame();
    }
    else if(btn.innerHTML == 'Done'){
        myWords.disabled = true;
        endGame();
    }
}