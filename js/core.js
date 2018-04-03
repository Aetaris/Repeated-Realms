
// Initializes the game, runs the frame loop & turn loop

window.onload = initialize;

const Globals = {

};

function initialize() { // Initializes the game
	
	Globals.canvas = document.getElementById("cnv");
	Globals.canvas.width = 1024;
	Globals.canvas.height = 676
	Globals.canvas.style.backgroundColor = "#000000";

	Globals.game = new Game();
}