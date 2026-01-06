const result = document.querySelector(".result");
const userChose = document.querySelector(".user-chose");
const compChose = document.querySelector(".comp-chose");
const userScore = document.querySelector(".player");
const compScore = document.querySelector(".computer");
const ties = document.querySelector(".ties");
const playAgain = document.querySelector(".play-ag");
const gesturesCont = document.querySelector(".gestures");
const checkBox = document.querySelector("#check");
const ConnectionValidate = document.querySelector(".chose-cont");

// fa-hand-fist >> Rock
// fa-hand >> paper
// fa-hand-scissors >> scissors
let gameRunning=true

let computerFunc = () => {
  let choices = ["fa-hand-fist", "fa-hand", "fa-hand-scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

let resultMapping={
  'fa-hand-fist':{
'fa-hand-fist':"Tie!",
'fa-hand':"Computer Wins!!!",
'fa-hand-scissors':"User Wins!!!"
  },
  'fa-hand':{
    'fa-hand':"Tie!",
    'fa-hand-fist':"User Wins!!!",
    'fa-hand-scissors':"Computer Wins!!!"
  },
  'fa-hand-scissors':{
    'fa-hand-scissors':"Tie!",
    'fa-hand-fist':"Computer Wins!!!",
    'fa-hand':"User Wins!!!"
  }

}
let userFunc = (e) => {
    let targetDiv=e.target
    let userChoice;

  if (targetDiv.classList.contains("fa-hand-fist")){
    userChoice="fa-hand-fist"
  }
 else if (targetDiv.classList.contains("fa-hand")){
    userChoice="fa-hand"
  }
 else if (targetDiv.classList.contains("fa-hand-scissors")){
    userChoice="fa-hand-scissors"
  }

  let computerChoice=computerFunc()
  let resultText=resultMapping[userChoice][computerChoice];
  result.innerHTML=resultText;

  userChose.style.display = "block";
  userChose.innerHTML = `<i class="fa-solid ${userChoice}"></i>`;

  compChose.style.display = "block";
  compChose.innerHTML = `<i class="fa-solid ${computerChoice}"></i>`;
  if (resultText.includes("User Wins!!!")) {
    let userScore1 = Number(userScore.innerText);
    userScore1 += 1;
    userScore.innerText = userScore1;
  }
  else if (resultText.includes("Computer Wins!!!")) {
    let compScore2 = Number(compScore.innerText);
    compScore2 += 1;
    compScore.innerText = compScore2;
  }
  else{
    let ties2 = Number(ties.innerText);
    ties2+=1
    ties.innerText=ties2
    result.innerHTML="Tie!!!"
  }

}
if (!navigator.onLine) {
  ConnectionValidate.innerHTML="No Internet Connection!!"
}

// Alternate of result mapping
/*
 if (computerChoice == "rock" && userChoice=="paper") {
    result.innerHTML = "User Wins!!!";
    let userScore1 = Number(userScore.innerText);
    userScore1 += 1;
    userScore.innerText = userScore1;
  } else if (computerChoice == "rock" && userChoice=="scissor") {
    result.innerHTML = "Computer Wins!!!";
    let compScore2 = Number(compScore.innerText);
    compScore2 += 1;
    compScore.innerText = compScore2;
  } else if (computerChoice=="paper" && userChoice=="scissor"){
    result.innerHTML = "User Wins!!!";
    let userScore1 = Number(userScore.innerText);
    userScore1 += 1;
    userScore.innerText = userScore1;
  }
  else if(computerChoice == "paper" && userChoice=="rock"){
    result.innerHTML = "Computer Wins!!!";
    let compScore2 = Number(compScore.innerText);
    compScore2 += 1;
  }
  else if (computerChoice == "scissor" && userChoice=="rock"){
    result.innerHTML = "User Wins!!!";
    let userScore1 = Number(userScore.innerText);
    userScore1 += 1;
    userScore.innerText = userScore1;
  }
  else if (computerChoice=="scissor" && userChoice=="paper"){
    result.innerHTML = "Computer Wins!!!";
    let compScore2 = Number(compScore.innerText);
    compScore2 += 1;
    compScore.innerText = compScore2;
  }
  else{
    result.innerHTML="Tie!!"
  }
  }*/
  gesturesCont.addEventListener('click',(e)=> {
console.log(gameRunning);
    if (checkBox.checked) {
      userFunc(e)
      gameRunning=false
    }
     if(gameRunning){
      userFunc(e)
      gameRunning=false
    }
    
  })
// checkBox.addEventListener('change',(e)=>{
//   if (!checkBox.checked) {
//   gameRunning=true
// }
// })

function playAgainFunc() {
  userChose.innerHTML = "";
  compChose.innerHTML = "";
  result.innerHTML = "";
  gameRunning=true
}
playAgain.addEventListener("click", playAgainFunc)
