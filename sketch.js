var bg, bg2;
var system, code, security, form;
var score = 0;
var left = 4;

function preload() {
  //preload the files
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  //create the canvas
  createCanvas(1275, 603);

  //create the security and system object
  security = new Security();
  system = new System();
}

function draw() {
  //add the cave image in the background
  background(bg);

  //call the clues function in draw
  clues();

  //makes the security display
  security.display();

  //write the score on the screen
  textSize(20);
  fill("white");
  text("Riddle Sovled: " + score, 525, 50);
  text("Riddle Left: " + left, 535, 80);

  //changes the background
  if(score === 4 && left === 0){
    clear();
    background(bg2);
    fill(158, 255, 232);
    textSize(40);
    text("!!TREASURE UNLOCKED!!", 350, 200);
    text("!!YOU FOUND THE TREASURE!!", 300, 250)
  }

  //makes the sprite visible
  drawSprites()
}