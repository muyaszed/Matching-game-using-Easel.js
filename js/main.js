var squarHeight = 100;
var squareWidth = 100;
var squareGap = 10;
var column = 4;
var row = 5;

function init() {
	var stage = new createjs.Stage("myCanvas");
	var square;
	var totalTiles = column*row;
	// var positionX =0;
	// var positionY = 0;
//alternative algorithm for square rendering using mutlidimensional array
	// for(i=0;i<row;i++) {
	// 	for(j=0;j<column;j++) {
			
	// 		square = drawSquare();
	// 		square.x = positionX;
	// 		square.y = positionY;
	// 		stage.addChild(square);
	// 		stage.update();
	// 		positionX += squareWidth+squareGap;
	// 		console.log(positionX);
	// 	}
	// 	positionX = 0;
	// 	positionY += squarHeight+squareGap;
	// }
	

	for(i=0; i < totalTiles; i++) {
		
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


