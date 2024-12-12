let gameSeq =[];
let userSeq =[];

let btns=["yellow", "red","purple","green"];

let started = false;
let level =0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn){
  btn.classList.add("gameflash");
  setTimeout(function(){
    btn.classList.remove("gameflash");
  },250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

 function levelUp(){
  userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;
  
  //for choosing random button
  let randIdx = Math.floor(Math.random() *3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
 }

 function checkAns(idx){
  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,500);
    }
  }else{
    h2.innerHTML =`Game Over! your score was <b>${level}<b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor ="white";
    },500);
    reset();
  }
 }

 function btnPress(){
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length-1); //level only update after userSeq last index
 }
 let allBtns = document.querySelectorAll(".btn");
  for(btn of allBtns){
    btn.addEventListener("click",btnPress);
  }
 
  function reset(){
    started = false;
    gameSeq =[];
    userSeq=[];
    level =0;
  }