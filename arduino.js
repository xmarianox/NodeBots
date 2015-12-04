
var Five = require('johnny-five');
var board = new Five.Board();

board.on('ready', function() {
	console.log('Board Ready!!');
/*	var proximity = new Five.Proximity({
	    controller: "HCSR04",
	    pin: 7
	});

  	proximity.on("data", function() {
    	console.log("Proximity: ");
   		console.log("  cm  : ", this.cm);
    	console.log("  in  : ", this.in);
    	console.log("-----------------");
  	});

  	proximity.on("change", function() {
    	console.log("The obstruction has moved.");
  	});*/
	var servo = new Five.Servo(5);

	this.repl.inject({
		servo: servo
	});

	servo.sweep();
});