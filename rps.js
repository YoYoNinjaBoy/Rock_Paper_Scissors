const p3=document.querySelector('#p3');

function gimmeButtons(){
    startGameBtn.remove()


    const gbContainer=document.querySelector('#gameButtons');
   
    const rockBtn=document.createElement('button');
        rockBtn.innerHTML='rock';
        gbContainer.appendChild(rockBtn);
        rockBtn.onclick=() =>
        p3.textContent=p3.textContent.replace(p3.textContent,
            round('rock'))
            ;

    const paperBtn=document.createElement('button');
        paperBtn.innerHTML='paper';
        gbContainer.appendChild(paperBtn);
        paperBtn.onclick=() =>
            p3.textContent=p3.textContent.replace(p3.textContent,
            round('paper'))
            ;

    const scissorsBtn=document.createElement('button');
        scissorsBtn.innerHTML='scissors';
        gbContainer.appendChild(scissorsBtn);
        const p3=document.querySelector('#p3');
        scissorsBtn.onclick=() =>
            p3.textContent=p3.textContent.replace(p3.textContent,
                round('scissors'))
                ;
}

const startGameBtn=document.querySelector('#startGame');
    startGameBtn.onclick=()=>gimmeButtons();
//const rockBtn=document.querySelector('#rockBtn');
  //  rockBtn.onclick=() =>round('rock');
        ;

//const paperBtn=document.querySelector('#paperBtn');
  //  paperBtn.onclick=() =>round('paper');

//const scissorsBtn=document.querySelector('#scissorsBtn');
  //  scissorsBtn.onclick=()=>round('scissors');

//randomly generates rock, paper, or scissors
function computerPlay(){
let rng=Math.floor(Math.random() *3);
if (rng===0) {computerChoice='rock'}
else if (rng===1) {computerChoice='paper'}
else if (rng===2) {computerChoice='scissors'}
return computerChoice

}
//plays rps in the console type round('rock') to throw rock round('paper') for paper etc.
function round(playerSelection,computerSelection=computerPlay()){
if (playerSelection.toLowerCase()==='rock' && computerSelection==='rock' ||
    playerSelection.toLowerCase()==='paper' && computerSelection==='paper' ||
    playerSelection.toLowerCase()==='scissors' && computerSelection==='scissors')
{return 'tie game!'}

else if ( 
    playerSelection.toLowerCase()==='rock' && computerSelection==='paper' ||
    playerSelection.toLowerCase()==='paper' && computerSelection==='scissors' ||
    playerSelection.toLowerCase()==='scissors' && computerSelection==='rock'
    )
    {return 'you lose!'}

else if (
    playerSelection.toLowerCase()==='rock' && computerSelection==='scissors' ||
    playerSelection.toLowerCase()==='paper' && computerSelection==='rock' ||
    playerSelection.toLowerCase()==='scissors' && computerSelection==='paper'
)
{return 'you win!'}

}//play 5 rounds and display results after each round
function game(){

    let ties=0,
        wins=0,
        losses=0;
    for (wins,losses; wins<3 && losses<3;) {
        let results=round();
        if (results==='you win!') {wins++,alert('Computer throws '+computerChoice+'.\nYou win this round.'+'\nwins:'+wins+' losses:'+losses+' ties:'+ties)}
        else if (results==='you lose!') {losses++, alert('Computer throws '+computerChoice+'.\nYou lose this round.'+'\nwins:'+wins+' losses:'+losses+' ties:'+ties)}
        else if (results==='tie game!') {ties++, alert('Computer throws '+computerChoice+'.\nYou tie this round.'+'\nwins:'+wins+' losses:'+losses+' ties:'+ties)} 
        else if (results==='typo') {losses++, alert('Computer throws '+computerChoice+'.\nTypo, automatic loss.'+'\nwins:'+wins+' losses:'+losses+' ties:'+ties)}
        let score='wins:'+wins+' losses:'+losses+' ties:'+ties;
        console.log(score)
    }
    if (wins>losses) {alert('You win!')}
    else if(wins<losses) {alert('You Lose!')}
    else  {alert('uh oh, something went wrong.')}
}