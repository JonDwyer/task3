

function setup() {
 createCanvas(460, 460);
 background(255);
}



var value = 0;

function draw() {
  fill(value);
  noStroke();
  
  background(255);
  
 var x = map(mouseY, 0, height, 0, 100)
 var y = map(mouseX, 0, width, 0, 100)
  

   
 triangle(30 + x, 75, 58 + x, 20, 86 + x, 75);
 
 triangle(30 , 150, 58, 95, 86, 150);
 triangle(30 , 225 + x, 58, 170 + x, 86, 225 + x);
 triangle(30 + y, 300, 58 + y, 245, 86 + y, 300);
 triangle(30 , 375, 58, 320, 86, 375);
 
 triangle(116, 75, 144, 20 , 172, 75);
 triangle(116 + y, 150, 144 + y, 95, 172 + y, 150);
 triangle(116 + x, 225, 144 + x, 170, 172 + x, 225);
 triangle(116 - x, 300, 144 - x, 245, 172 - x, 300);
 triangle(116, 375, 144, 320, 172, 375);

 triangle(202, 75, 230, 20, 258, 75);
 triangle(202 - x, 150, 230 - x, 95, 258 - x, 150);
 triangle(202, 225, 230, 170, 258, 225);
 triangle(202, 300, 230, 245, 258, 300);
 triangle(202 + x, 375, 230 + x, 320, 258 + x, 375);
 
 triangle(288 + y, 75, 316 + y, 20, 344 + y, 75);
 triangle(288, 150 - x, 316, 95 - x, 344, 150 - x);
 triangle(288 - y, 225, 316 - y, 170, 344 - y, 225);
 triangle(288, 300, 316, 245, 344, 300);
 triangle(288, 375, 316, 320, 344, 375);
 
 triangle(374, 75, 402, 20, 430, 75);
 triangle(374, 150, 402, 95, 430, 150);
 triangle(374 + y, 225, 402 + y, 170, 430 + y, 225);
 triangle(374, 300, 402, 245, 430, 300);
 triangle(374, 375, 402, 320, 430, 375);

}

function mouseMoved() {
  value = value + 2;
  if (value > 255) {
    value = 0;
  }

}



  


