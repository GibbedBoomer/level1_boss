// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var collisionCount


function Player()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	this.vx = 2
	this.vy = 2
	
	//player's color
	this.color = "#ff0000";
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}



function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(player.x >= canvas.width - player.width/2)
	{
		player.vx = player.vx + 2;
		player.vx = -player.vx;	
		collisionCount++;
	}
	//---------------------------------------------------

	//--------------Bounce of Left----------------------
	if(player.x <= player.width/2)
	{
		player.vx = player.vx + 2;
		player.vx = -player.vx;
		collisionCount++;
	}
	//---------------------------------------------------

	//--------------Bounce of Top----------------------
	if(player.y <= player.height/2)
	{
		player.vy = player.vy + 2;
		player.vy = -player.vy;
		collisionCount++;
	}
	//---------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(player.y >= canvas.height - player.height/2)
	{
		player.vy = player.vy + 2;
		player.vy = -player.vy;
		collisionCount++;
	}
	//---------------------------------------------------
	document.getElementById("count").innerHTML = collisionCount;
	player.draw();
}
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	
	collisionCount = 0;
	
	timer = setInterval(animate, interval);
	//---------------------------------------------------

	player.draw();
