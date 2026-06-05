function getComputerChoice() {
   let m = Math.floor (Math.random()* (4-1)+1);
   if (m===1){
    m="rock";
   }
   else if (m===2){
    m="scissors";
   }
   else{
    m="paper";
   }
   return m;
}

function getHumanChoice(){
    let m=prompt("Enter your choice: rock, paper or scissors");
    m=m.toLowerCase();
    return m;
}

let humanscore=0;
let computerscore=0;

function playround(human,computer){
    human=getHumanChoice();
    computer=getComputerChoice();
    if (human==="rock" && computer==="scissors" || human==="scissors" && computer==="paper" || human==="paper" && computer==="rock" ){
        console.log(`You Win! $(human) beats $(computer)`);
        humanscore+=1;
    }
    else if(human===computer){
        console.log(`The match is a Draw.`);
    }
    else{
        console.log(`You Lose! $(computer) beats $(human)`);
        computerscore+=1;
    }
}

function playgame(){
    let a,b=0;
    for (let x=0; x<5; x++){
        playround(a,b);
    }
    if (humanscore>computerscore){
        console.log("You won the game!");
    }
    else if(humanscore===computerscore){
        console.log("The game is a draw!");
    }
    else{
        console.log("You lost the game!");
    }
}

playgame();
