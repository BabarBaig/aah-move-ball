//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById("ball");
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;

  if (reverse) {
    positionX -= velocity;
    positionY -= velocity;
  }
  else {
    positionX += velocity;
    positionY += velocity;
  }

  if (positionX > Xmax)
    reverse = true;
  if (positionX < Xmin)
    reverse = false;

  ball.style.left = positionX + "px";
  ball.style.top  = positionY + "px";
  // console.log(ball.style.left, Xmin, Xmax)
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
