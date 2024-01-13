let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".image");

const message=document.querySelector('#msg');

const user=document.querySelector('#user-score');
const computer=document.querySelector('#comp-score');
let u=0;
let c=0;

let playgame = (choiceId) => {

    console.log("User Choice =", choiceId);
    const comp = genrator();
    console.log("Computer Choice =", comp);
    if (choiceId === comp) {
        drawgame();
    }
    else {
        let userwin = true
        if (choiceId === 'rock') {
            userwin = comp == "paper" ? false : true;
        }
        else if (choiceId === 'paper') {
            userwin = comp == 'scissor' ? false : true;
        }
        else if(choiceId==='scissor')
        {
            userwin=comp=='rock' ? false:true;
        }
        console.log("value in userwin= ",userwin);
   showwinner(userwin);
    }


}

const showwinner=(use)=>{
    if(use==true)
    {
        console.log("You win");
        message.innerText="You win";
       u++;
       user.innerText=u;

    }

    else 
    {
        console.log("You lose");
        message.innerText="You Lose";
       c++;
       computer.innerText=c;
        }
}

//This wil generate random choices using Math.random() to throw random no 
//and math.floor() to remove   floting points 
const genrator = () => {
    const opt = ['rock','paper','scissor'];
    const rndidx = Math.floor(Math.random()*3);
    return opt[rndidx];
};

const drawgame = () => { console.log("game was draw");  message.innerText="Draw"; };


choice.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});
