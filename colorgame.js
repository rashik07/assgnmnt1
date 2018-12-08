var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	"rgb(255, 0, 255)",	

	]

	var squares= document.querySelectorAll(".square");
	var pickedcolor =pickedcolor();
	var colordisplay = document.getElementById("colordisplay");
	var messagedisplay= document.querySelector("#message");
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedcolor =this.style.background;
			if (clickedcolor === pickedcolor) {
				messagedisplay.textContent="Correct!";
				changeColors(clickedcolor);
			}
			else{
				this.style.background= "#232323";
				messagedisplay.textContent =" Try Again";

			}

		}
		)


	}

function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickedcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}