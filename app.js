let boxes=document.querySelectorAll('.box')
let restBtn=document.querySelector('#reset-btn')
let msg=document.querySelector('#msg')
let newBtn=document.querySelector('#new-btn')
let newBtnContainer=document.querySelector('.msg-container')
let turnO=true
const winnerPatern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O"
            turnO=false

        }else{
            box.innerText="X"
            turnO=true
        }
      box.disabled=true
      checkWinner();
    })

})



showinner=(winner)=>{
    msg.innerText=`Congradulation!!!! Winner is ${winner}`
    newBtnContainer.classList.remove('hide')
    disabledBox()

}

lossGeame=()=>{
    msg.innerText='This game is tie'
    newBtnContainer.classList.remove('hide')
    disabledBox()

}

disabledBox=()=>{
    for(let box of boxes){
       box.disabled=true
    }
}

enabledBox=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
     } 
}


resetNewGame=()=>{
    turnO=true
    enabledBox()
    newBtnContainer.classList.add('hide')
}

const checkWinner=()=>{
    for(let win of winnerPatern){
        let post1=boxes[win[0]].innerText
        let post2=boxes[win[1]].innerText
        let post3=boxes[win[2]].innerText
       
        if(post1!="" && post2!="" && post3!=""){
            if(post1===post2 && post2===post3){
                console.log("Winner ",post1);
                showinner(post1);
            } 
        }
    }
}


newBtnContainer.addEventListener('click',resetNewGame)
restBtn.addEventListener('click',resetNewGame)