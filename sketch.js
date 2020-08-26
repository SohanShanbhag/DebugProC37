var canvas;

var runnerCount = 0;
var gameState = 0;
var form, game, runner;
var allRunners;
var distance = 0;
var database;

var run1, run2, run3, run4, run5, runners;

function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight - 150);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(runnerCount === 5){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
}