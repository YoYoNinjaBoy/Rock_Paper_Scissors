const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');
const gbContainer=document.querySelector('#gameButtons');

function gimmeButtons(){
    p5.textContent=p5.textContent.replace(p5.textContent,'');
    p4.textContent=p4.textContent.replace(p4.textContent,'');
    p3.textContent=p3.textContent.replace(p3.textContent,'');
    p2.textContent=p2.textContent.replace(p2.textContent,'GOOD LUCK!');
    p1.textContent=p1.textContent.replace(p1.textContent,'Best of 5.');
    startGameBtn.remove();

   
    const rockBtn=document.createElement('button');
        rockBtn.innerHTML='<img src="https://img.icons8.com/ios/50/000000/rock.png"/>';
        rockBtn.style.backgroundColor='';
        gbContainer.appendChild(rockBtn);
        rockBtn.classList.add('gameButton');
        rockBtn.addEventListener('click',function(){round('rock')});
                
        

    const paperBtn=document.createElement('button');
        paperBtn.innerHTML='<img src="https://img.icons8.com/dotty/80/000000/paper.png"/>';
        gbContainer.appendChild(paperBtn);
        paperBtn.classList.add('gameButton');
        paperBtn.addEventListener('click',function(){round('paper')});
            
        

    const scissorsBtn=document.createElement('button');
        scissorsBtn.innerHTML='<img src="https://img.icons8.com/ios/50/000000/scissors.png"/>';
        gbContainer.appendChild(scissorsBtn);
        scissorsBtn.classList.add('gameButton');
        scissorsBtn.addEventListener('click',function(){round('scissors')})
}

let wins=0;
let ties=0;
let losses=0;

const startGameBtn=document.querySelector('#startGame');
    startGameBtn.onclick=()=>gimmeButtons();

    const gameInfoContainer=document.querySelector('#gameInfo');
        const p3=document.createElement('p');
            p3.id='#p3';
            gameInfoContainer.appendChild(p3);
        const p4=document.createElement('p');
            p4.id='#p4';
            gameInfoContainer.appendChild(p4);
        const p5=document.createElement('p');
            p5.id='#p5';
            gameInfoContainer.appendChild(p5);
    
//randomly generates rock, paper, or scissors
function computerPlay(){
let rng=Math.floor(Math.random() *3);
if (rng===0) {computerChoice='rock'}
else if (rng===1) {computerChoice='paper'}
else if (rng===2) {computerChoice='scissors'}
return computerChoice

}
//plays rps in the console type round('rock') to throw rock round('paper') for paper etc.
function round(playerSelection){
    
    
    
    computerSelection=computerPlay()
    if (
        playerSelection==='rock' && computerSelection==='rock' ||
        playerSelection==='paper' && computerSelection==='paper' ||
        playerSelection==='scissors' && computerSelection==='scissors')
        {ties+=1;
        wltMessage='You tie!';
        }
    
        else if ( 
            playerSelection==='rock' && computerSelection==='paper' ||
            playerSelection==='paper' && computerSelection==='scissors' ||
            playerSelection==='scissors' && computerSelection==='rock')
            {losses+=1;
            wltMessage='You lose!';
            }
        
        else if (
            playerSelection==='rock' && computerSelection==='scissors' ||
            playerSelection==='paper' && computerSelection==='rock' ||
            playerSelection==='scissors' && computerSelection==='paper')
            {
            wins+=1;
            wltMessage='You win!'}
        

        let score='wins: '+wins+'\nLosses: '+losses+'\nTies: '+ties
        p3.textContent=wltMessage;
        p4.textContent=score;

        p1.textContent=p1.textContent.replace(p1.textContent, 
                'You throw '+playerSelection)
        p2.textContent=p2.textContent.replace(p2.textContent,
                'Skynet throws '+computerSelection)
            
    if(wins===3){
        p5.textContent='Sarah Connor is saved';
        

        gameOverMan();
    }
        
    else if (losses===3){
        p5.textContent='Skynet has enslaved humanity';

        gameOverMan();
    }
}
function removeElementsByClass(className){
    const elements=document.getElementsByClassName(className);
    while(elements.length>0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function gameOverMan(){
    wins=0;
    losses=0;
    ties=0;

    removeElementsByClass('gameButton');
    
    const playAgainBtn=document.createElement('button');
        playAgainBtn.innerHTML='Play again?';
        playAgainBtn.classList.add('startAndAgain');
        playAgainBtn.addEventListener('click',function(){gimmeButtons()});
        playAgainBtn.addEventListener('click',function(){playAgainBtn.remove()});
        gbContainer.appendChild(playAgainBtn);

    

    
}