function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(220);

translate(100,100);
for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      translate(x * 100, y * 100);
        fill ('black')
      stroke('white');
      strokeWeight('40');
     ellipse(0,0,100,100);
      pop();
   }

}
}
