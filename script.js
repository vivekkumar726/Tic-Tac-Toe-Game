let boxes=document.querySelectorAll(".box");
let rButton=document.querySelector("#rstButton");
let newGBtn=document.querySelector("#newButton");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO=true;
    enableboxes();
    msgCont.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableboxes();
};
const checkwinner = () => {
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos1==pos3){
        showWinner(pos1);
    }
    }
}
};

newGBtn.addEventListener("click",resetGame);
rButton.addEventListener("click",resetGame);