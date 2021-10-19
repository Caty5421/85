canvas= document.getElementById('myCanvas')
grencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar-y = 255;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
    background_imgTag.onload = uploadgreencar;
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawing(background_imgTag, 0, 0, canvas.wigth, canvas.height);
 

}

function uploadgreencar() {
	ctx.draImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{

		grencar_y = greencar_y - 10;
		console.log("When up arrow is preesed, x = " + greencar_x + " l y =" + greencar_y)
		uploadBackground();
		uploadgreencar();
	}
}

function do
