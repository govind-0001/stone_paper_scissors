let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
   const randomIdx =Math.floor(Math.random()*3);
   return options[randomIdx];
}

const drawGame = () => {
  console.log("game was draw.");
  msg.innerText = "Draw! play again";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log(`you Win`);
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorepara.innerText = compScore;
    console.log("you lose")
    msg.innerText = `You Lose. ${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame =(userChoice) => {
  console.log("user choice = ",userChoice);
  //generarting comp choice
  const compChoice = genCompChoice();
  console.log("comp choice = ",compChoice);

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      // scissors , paper
     userWin = compChoice === "paper"? false :true;
    }else if(userChoice === "paper"){
      userWin = compChoice == "scissors"?false:true;
    }else{
      userWin = compChoice =="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  } 
 
}




choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
      const userChoice =  choice.getAttribute("id");
      playGame(userChoice);
        

    })
})