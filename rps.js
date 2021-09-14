//randomly generates rock, paper, or scissors
function computerPlay(){
let rng=Math.floor(Math.random() *3);
if (rng===0) {computerChoice='rock'}
else if (rng===1) {computerChoice='paper'}
else if (rng===2) {computerChoice='scissors'}
return computerChoice
}//plays rps in the console type round('rock') to throw rock round('paper') for paper etc.
function round(playerSelection, computerSelection=computerPlay()){
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
else {return 'uh oh'}
}