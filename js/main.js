function init() {
	let stage = new createjs.Stage("myCanvas");
	let square = drawSquare();
	

	stage.addChild(square);
	stage.update();
}

function drawSquare() {
	let graphics = new createjs.Graphics().setStrokeStyle(5).beginStroke("rgba(20,20,20,1)")
	graphics.beginFill(randomColor()).rect(5,5,70,70);
	let shape = new createjs.Shape(graphics);
	return shape;
}

function randomColor() {
	let num1 = Math.floor(Math.random()*255);
	let num2 = Math.floor(Math.random()*255);
	let num3 = Math.floor(Math.random()*255);
	return "rgba("+num1+","+num2+","+num3+",1)";
	
}


