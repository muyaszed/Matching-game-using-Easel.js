var squarHeight = 70;
var squareWidth = 70;
var squareGap = 10;
var column = 10;
var row = 7;
var colorCount = 1;
var genOnce = false;
var color;
var temp;
var totalTiles = column*row;
var squarePlacement = [];

function init() {
	
	var stage = new createjs.Stage("myCanvas");
	var square;
	randomDoubleColor();
	

	

	for(i=0; i < squarePlacement.length; i++) {
		
		
		square = drawSquare();
		square.x = (squareWidth+squareGap)*(squarePlacement[i]%column);
		square.y = (squarHeight+squareGap)*Math.floor(squarePlacement[i]/column);	
		stage.addChild(square);
		stage.update();
		
	}
	
	
	

	
}



function drawSquare(color) {

	color =randomColor();
	var graphics = new createjs.Graphics().setStrokeStyle(5).beginStroke("rgba(20,20,20,1)")

	if(!genOnce) {
		graphics.beginFill(color).rect(5,5,squarHeight,squareWidth);
		temp = color;
		genOnce = true;
	}else {
		graphics.beginFill(temp).rect(5,5,squarHeight,squareWidth);
		genOnce = false;
	}
	
	
	
	var shape = new createjs.Shape(graphics);
	return shape;
}

function randomColor() {
	
	var num1 = Math.floor(Math.random()*255);
	var num2 = Math.floor(Math.random()*255);
	var num3 = Math.floor(Math.random()*255);

	return "rgba("+num1+","+num2+","+num3+",1)";
	
}

function randomDoubleColor() {
	for(i=0; i<totalTiles;i++) {
		squarePlacement.push(i);
	}
	
	squarePlacement = shuffleArray(squarePlacement);
	
	return squarePlacement;

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


