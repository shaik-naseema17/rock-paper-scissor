let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});

const playGame=(userchoice)=>{
    console.log("user-choice",userchoice);
    const compchoice=gencompchoice();
    console.log("comp-choice",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice)
        
    }


}

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const genidx=Math.floor(Math.random()*3);
    return options[genidx];
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user_score++;
        userscore.innerText=user_score;
        msg.innerText=`you win .your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }else{
        comp_score++;
        compscore.innerText=comp_score;
        msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game draw";
    msg.style.backgroundColor="blue";
}

