var structure = new Array();

var i = "#ee3c96";
var o = undefined;

structure = [
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o],
	[o,i,i,o,o,i,i,o,o,i,i,i,o,i,o,o,o,o,i,i,o,o,o,i,i,i],
	[i,o,o,o,i,o,o,i,o,i,o,o,i,o,i,o,i,o,i,o,i,o,i,o,o,i],
	[i,o,o,o,i,o,o,i,o,i,o,o,i,o,i,o,i,o,i,o,i,o,i,o,o,i],
	[o,i,i,o,o,i,i,o,o,i,o,o,i,o,i,o,i,o,i,o,i,o,o,i,i,i],
	[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i],
	[o,o,o,o,o,i,i,o,o,i,i,o,o,o,i,i,o,o,i,i,o,o,o,i,i,o],
	[o,o,o,o,i,o,o,o,i,o,o,i,o,i,o,o,i,o,i,o,i,o,o,o,o,o],
	[o,o,o,o,o,o,i,o,i,o,o,i,o,i,o,o,i,o,i,o,i,o,o,o,o,o],
	[o,o,o,o,i,i,o,o,o,i,i,o,o,o,i,i,o,o,i,o,i,o,o,o,o,o]
]

var x = new level(structure);


var game = new game(null, x);