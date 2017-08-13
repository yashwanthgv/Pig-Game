/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activepPlayers,gamePalying;


init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePalying){
        
    var dice=Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';
    
    if(dice !== 1 )
        {
            roundScore += dice;
            document.querySelector('#current-' + activepPlayers).textContent = roundScore;
        }else{
            
            
            activepPlayers === 0 ? activepPlayers = 1 : activepPlayers = 0;
            roundScore=0;
            
            nextPlayers();
        }    
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   
    if(gamePalying){
    scores[activepPlayers] += roundScore;
    
    document.querySelector('#score-'+activepPlayers).textContent = scores[activepPlayers];
    
    if(scores[activepPlayers]>=20){
        document.querySelector('#name-'+activepPlayers).textContent='Winner!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activepPlayers+'-panel').classList.add('winner');
        document.querySelector('.player-'+activepPlayers+'-panel').classList.remove('active');
        gamePalying = false;
        
        
    }else{
        nextPlayers();
    }
    }
    
});

document.querySelector('.btn-new').addEventListener('click',function(){
    init();
            
    
});

function nextPlayers(){
    
            activepPlayers === 0 ? activepPlayers = 1 : activepPlayers = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display = 'none';
    
}


function init(){
            scores = [0,0];
            roundScore = 0;
            activepPlayers = 0;
            gamePalying = true;
            //document.querySelector('#current-' + activepPlayers).innerHTML ='<em>'+ dice+ '</em>' ;
            //document.querySelector('#current-' + activepPlayers).textContent = dice;

            document.querySelector('.dice').style.display = 'none';
            document.getElementById('score-0').textContent = 0;
            document.getElementById('score-1').textContent = 0;
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('#name-0').textContent='Player 1';
            document.querySelector('#name-1').textContent='Player 2';
}
