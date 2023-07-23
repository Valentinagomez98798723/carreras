var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1_img;
var car2_img;
var car1,car2
var gameState
var cars= []

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img =loadImage("./assers/car1.png");
  car2_img =loadImage("./assers/car2.png");
  if (playerCount===2("game.update"))
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
