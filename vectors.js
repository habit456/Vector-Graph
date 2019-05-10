const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

class Vector {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  get length() {
    let distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.x, 2));
    return distance;
  }
}

let myVect;
let altVect = new Vector(0,0);

addEventListener('click', showCoords);

function showCoords(event) {

    let x = event.clientX;
    let y = event.clientY;
    let altX = (x - 10) / 20;
    let altY = 25 - ((y - 10) / 20);

    if (x >= 0 && x <= 500 && y >= 0 && y <= 500) {
      myVect = new Vector(x, y);
      altVect = new Vector(altX, altY);
      document.getElementById('x').innerHTML = `X: ${altX}`;
      document.getElementById('y').innerHTML = `Y: ${altY}`;
      document.getElementById('mag').innerHTML = `Magnitude: ${altVect.length}`;
    }
}

function draw() {
  ctx.clearRect(0,0,500,500);
  ctx.beginPath();

  for (let x = 0; x < 500; x += 20) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 500);
  }

  for (let y = 20; y <= 500; y += 20) {
    ctx.moveTo(0, y);
    ctx.lineTo(500, y);
  }

  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.stroke();

  if (myVect) {
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(myVect.x, myVect.y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}
setInterval(draw, 100);
