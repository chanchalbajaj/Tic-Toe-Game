let document1=document.querySelectorAll(".box");
let document2=document.querySelector("#reset");
let document3=document.querySelector("#new");
let document4=document.querySelector(".msg");
let document5=document.querySelector("#p");
let turn0=true //x,y

const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame=()=>{
    turn0=true;
    enable();
    document4.classList.add("hide");
}

document1.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        winpatern();
    })
})

const disable=()=>{
    for(let box of document1){
        box.disabled=true;
    }
}

const enable=()=>{
    for(let box of document1){
        box.disabled=false;
        box.innerText=""
    }
}

const showwin=(winner)=>{
document5.innerText=`Congratulation!  The Winner Is ${winner}`;
document4.classList.remove("hide");
disable();
}

const winpatern=()=>{
    for(patern of win){
let pos1val=document1[patern[0]].innerText
let pos2val=document1[patern[1]].innerText
let pos3val=document1[patern[2]].innerText
if(pos1val!= "" && pos2val!= "" && pos3val!= "" ){
    if(pos1val==pos2val && pos2val==pos3val){
        console.log("winner",pos1val);
        showwin(pos1val);
    }
}
    }
}

document3.addEventListener("click",resetGame);
document2.addEventListener("click",resetGame)