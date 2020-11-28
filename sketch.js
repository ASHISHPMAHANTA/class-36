var canvas;
var backgroundImage;
var gameState = 0;
var playerCount ;
var database;
var player;
var game;
var form;



function setup(){
canvas = createCanvas(400,400);
database = firebase.database();
game = new Game()
game.getState()
game.start();
}

function draw(){

  
}




