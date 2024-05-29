let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.options');
const msg = document.querySelector('#msg');
const userscoreupdate = document.querySelector('#user-score');
const compscoreupdate = document.querySelector('#comp-score');
const msgcontainer = document.querySelector('.msg-container');
const longmsg = document.querySelector('.long-msg');

choices.forEach((option) =>{
    option.addEventListener('click', () =>{
        const userchoice = option.getAttribute('id');
        playgame(userchoice);
    })
})


const showwin = (winner,userchoice,compchoice) =>{
    if (winner === true){
        console.log('User Wins');
        msg.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
        userscore++;
        userscoreupdate.innerText = userscore;
        msg.style.backgroundColor = 'Yellow';
        // longmsg.classList.add('long-msg');
        // msg.classList.remove('msg');
    } else{
        console.log('Comp Wins');
        msg.innerText = `You LOOSE ! Computer's ${compchoice} beats ${userchoice}`;
        compscore++;
        compscoreupdate.innerText = compscore;
        msg.style.backgroundColor = 'red';
    }
}
const draw = (userchoice,compchoice) =>{
    console.log('Draw');
    msg.innerText = `It's a DRAW! Your ${userchoice} = Computer's ${compchoice}`;
    msg.style.backgroundColor = 'aqua';
}
const playgame = (userchoice) =>{
    console.log('user choosed = ',userchoice);
    const compchoice = gencompchoice();
    console.log('computer choosed =', compchoice);

    if (userchoice === compchoice){
        draw(userchoice,compchoice);
    } else{
        let winner = true;
        if (userchoice === 'rock'){
            // comp paper,scissor
            winner = compchoice === 'paper' ? false : true; 
        } else if (userchoice === 'paper'){
            // rock and scissor
            winner = compchoice === 'rock' ? true : false;
        } else{  // user choice = scissors
            // rock paper
            winner = compchoice === 'rock' ? false : true;
        }
        showwin(winner,userchoice,compchoice);
    }

}

const gencompchoice = () =>{ // ye funstion hme ek random choice decide krke dega 
    const compoptions = ['rock','paper','scissor'];
    const randcompid = Math.floor(Math.random()*3); 
    // math ek inbuild class hai js me 
    // floor removes decimal numbers
    return compoptions[randcompid];
}

