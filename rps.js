//randomly generates rock, paper, or scissors
function computerPlay(){
let rng=Math.floor(Math.random() *3);
if (rng===0) {computerChoice='rock'}
else if (rng===1) {computerChoice='paper'}
else if (rng===2) {computerChoice='scissors'}
return computerChoice
}//plays rps in the console
function round(playerSelection, computerSelection=computerPlay()){
if (playerSelection==='rock' && computerSelection===rock ||
    playerSelection==='paper' && computerSelection==='paper' ||
    playerSelection==='scissors' && computerSelection==='scissors')
{return 'tie game!'}
else {return 'go code more'}
}