const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard=false;
let firstCard, secondCard;

var count=0,rem=10,maxcount=25,pair=0;


function flipCard() 
{
  if(lockBoard) return;
  if(this===firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    //first  click
    hasFlippedCard = true;
    incrCount();
    firstCard = this;
    return;

  } 
  incrCount();
    //second click
    secondCard = this;
    //are cards same
    
    console.log(count);
    checkmatch();
}
function checkmatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch? disableCards():unFlipCards();
}
function disableCards()
{
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  hasFlippedCard=false;
  pair=pair+1;
}
function unFlipCards()
{
  lockBoard=true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}
function resetBoard()
{
  [hasFlippedCard,lockBoard]=[false,false];
  [firstCard,secondCard]=[null,null];
}

(function shuffle()
{
  cards.forEach(card =>{
    let randomPos=Math.floor(Math.random()*12);
    card.style.order=randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
function incrCount(){
  
  if(count>=maxcount)
  {
    cards.forEach(card=>card.classList.remove('flip'));
    alert("You Lose \n Game is reloaded")
  }
  else{
    count=count+1;
  document.getElementById('moves').innerText=" " +count;
  document.getElementById('rem').innerText=" " +(maxcount-count);
  if(pair==6)
  {
    alert("Congragulations.....You won!! \n Play Again ");
    cards.forEach(card=>card.classList.remove('flip'));
  }
  }
  
  return;
}
