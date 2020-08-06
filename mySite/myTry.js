var scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function () {
  var dice1 = Math.floor(Math.random()*6 )+1;
  var dice2 = Math.floor(Math.random()*6 )+1;

    document.getElementById('dice-1').style.display= 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-'+ dice1+ '.png';
    document.getElementById('dice-2').src = 'dice-'+ dice2+ '.png';
    if(dice1 === 1 || dice2===1){
        nextPlayer();
    }else{
        roundScore += + dice1 +dice2;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

    }
})




























































































document.querySelector('.btn-new').addEventListener('click',init);


function init() {
    scores=[0,0];
    roundScore = 0;
    gamePlaying= true ;
    activePlayer = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
