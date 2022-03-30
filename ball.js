// velocity of the ball.
var velocity = 25;
// diraction of the ball.
var reverse = false;
// starting position.
var positionX = 250;
var positionY = 250;
// border radius. higher it is circular it gets.
var br = 5;
// original br.
var obr = 0;
// this function will move the ball diagnally.
// each time it hits the edge, it'll get circular and bouces the other way.
function moveBall() {
var ball = document.getElementById('ball');
var Xmin = 0;
var Xmax = 500;
var Ymin = 0;
var Ymax = 500;
    if(!reverse){
        positionX = positionX + velocity;
        positionY = positionY + velocity;
       
    } 
  else{
    positionX = positionX - velocity;
    positionY = positionY - velocity;
   
  }
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
    ball.style.borderRadius = obr + '%';

    if(positionX === Xmax || positionX < Xmin){
    obr = obr + br;
    return reverse = !reverse;
    }
    if(positionY === Ymax || positionY < Ymin){
    obr = obr - br;
    return reverse = !reverse;
  }
}


// this will call the function 'moveBall' every 100ms.
setInterval(moveBall, 100);