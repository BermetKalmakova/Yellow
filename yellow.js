var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var start1 = document.getElementById("start1");
var start2 = document.getElementById("start2");
var stop = document.getElementById("stop");

var clear = function(e){
    ctx.clearRect(0,0,500,500);
}

var r = 2;
var setting = 0;
var draw = function(e){
    clear();
    if (setting == 0){
	if (r > 230){
	    setting = 1;
	}
	r++;
    }
    else{
	if (r < 2){
	    setting = 0;
	}
	r --;
    }
    ctx.beginPath();
    ctx.arc(250,250,r,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    requestID = window.requestAnimationFrame(draw);
}
var xc = 1
var yc = 1
var x = Math.floor(Math.random() * 420);
var y = Math.floor(Math.random() * 450);
var move = function(e){
    clear();
    if (x > 420){
	xc = -1;
    }
    if (x < 0){
	xc = 1;
    }
    if (y > 450){
	yc = -1;
    }
    if (y < 0){
	yc = 1;
    }
    ctx.beginPath();
    x = x+xc
    y = y+yc
    ctx.fillRect(x,y,80,50);
    ctx.stroke();
    requestID = window.requestAnimationFrame(move);
}

var end = function(e){
    window.cancelAnimationFrame(requestID);
}

stop.addEventListener("click",end);

start1.addEventListener("click",draw);

start2.addEventListener("click",move);
