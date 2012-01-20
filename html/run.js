	var structure;

	var x = "#ee3c96";
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
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o],
		[o,x,x,o,o,x,x,o,o,x,x,x,o,x,o,o,o,o,x,x,o,o,o,x,x,x],
		[x,o,o,o,x,o,o,x,o,x,o,o,x,o,x,o,x,o,x,o,x,o,x,o,o,x],
		[x,o,o,o,x,o,o,x,o,x,o,o,x,o,x,o,x,o,x,o,x,o,x,o,o,x],
		[o,x,x,o,o,x,x,o,o,x,o,o,x,o,x,o,x,o,x,o,x,o,o,x,x,x],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x],
		[o,o,o,o,o,x,x,o,o,x,x,o,o,o,x,x,o,o,x,x,o,o,o,x,x,o],
		[o,o,o,o,x,o,o,o,x,o,o,x,o,x,o,o,x,o,x,o,x,o,o,o,o,o],
		[o,o,o,o,o,o,x,o,x,o,o,x,o,x,o,o,x,o,x,o,x,o,o,o,o,o],
		[o,o,o,o,x,x,o,o,o,x,x,o,o,o,x,x,o,o,x,o,x,o,o,o,o,o]
	]

	var l = new Level(structure);


	var game = new Game(null, l);