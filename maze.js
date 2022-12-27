canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

let game = {
	active : false,
	setActive : (bool)=>{
		game.active = bool;
	},
	update : ()=>{
		c.clearRect(0, 0, canvas.width, canvas.height);
		game.generating();
	},
	clear : ()=>{
		c.clearRect(0, 0, canvas.width, canvas.height);
		game.setActive(false);
	},
	mazeWidth : 20,
	mazeHeight : 12,
	blockWidth : 50,
	blockHeight : 50,
	maze : [
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
		1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 
		1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 
		1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 
		1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
		1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 
		1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1,
		1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1,
		1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 
		1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
	],
	generating : ()=>{
		bx = 0;
		by = 0;
		for(x in game.maze){
			if(game.maze[bx+(by*game.mazeWidth)]==1){
				c.fillStyle = "#904030";
				c.fillRect(bx*game.blockWidth, by*game.blockHeight, game.blockWidth, game.blockHeight);
			}
			++bx;
			if(bx > game.mazeWidth-1){
				bx = 0;
				++by;
			}
		}
	}
};

(function main(){
	window.setInterval(()=>{
		if(game.active){
			game.update();
		}
	},100)
}());
