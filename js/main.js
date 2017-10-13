var squarHeight = 200;
var squareWidth = 200;
var squareGap = 10;
var column = 3;
var row = 2;

function init() {
	var stage = new createjs.Stage("myCanvas");
	var square;
	

	for(i=0; i < column*row; i++) {
		
		square = drawSquare();
		square.x = (squareWidth+squareGap)*(i%column);
		square.y = (squarHeight+squareGap)*Math.floor(i/column);	
		stage.addChild(square);
		stage.update();
		// x += 80;
	}
	
	

	
}

function drawSquare() {
	var graphics = new createjs.Graphics().setStrokeStyle(5).beginStroke("rgba(20,20,20,1)")
	graphics.beginFill(randomColor()).rect(5,5,squarHeight,squareWidth);
	var shape = new createjs.Shape(graphics);
	return shape;
}

function randomColor() {
	var num1 = Math.floor(Math.random()*255);
	var num2 = Math.floor(Math.random()*255);
	var num3 = Math.floor(Math.random()*255);
	return "rgba("+num1+","+num2+","+num3+",1)";
	
}


