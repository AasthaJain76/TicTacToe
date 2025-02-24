let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgCon=document.querySelector(".msg-container");
let newBtn=document.querySelector("#new-btn");
let msgText=document.querySelector("#msg");
//Winning Pattern- 2D Array
const winningPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn0=true;
let count=0;

const resetGame=()=>{
    count=0;
    turn0=true;
    enableBoxes();
    msgCon.classList.add("hide");
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msgText.innerText=`Congratulations! Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}
const gameDraw=()=>{
    msgText.innerText=`Game was Draw`;
    msgCon.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
    
});
const checkWinner=()=>{
    for(let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);