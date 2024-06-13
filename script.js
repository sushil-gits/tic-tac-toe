let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true; //playerX, player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    hideMsg();
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            //player0
            box.innerText="0";
           turn0=false;
        }
        else
        {
            //playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        hideMsg();
    });
});
const hideMsg = () => {
    msgContainer.classList.add("hide");
};
const disableBoxes=()=>{   
    boxes.forEach(box=>{
        box.disabled=true;
       
    });
};
const enableBoxes=()=>{   
    boxes.forEach(box =>{
        box.disabled=false;
        box.innerText="";
    });
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            return;
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        showWinner("None, it's a tie");
    }
    
};
newGameBtn.addEventListener("click", () => {
    resetGame();
    msgContainer.classList.add("hide"); // Hide the message container when New Game is clicked
});

resetBtn.addEventListener("click", () => {
    resetGame();
    msgContainer.classList.add("hide"); // Hide the message container when Reset Game is clicked
});
// Initially hide the message container
msgContainer.classList.add("hide");