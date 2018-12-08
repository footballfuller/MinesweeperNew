var actualMines = 10;
var displayMines = 10;

function reDrawGame(rows, cols) {
	var rows;
	var cols;
	var level=diff();
	if (level == "easy") {
		rows= 3;
		cols=3;
	} else if (level == "medium") {
		rows=7;
		cols=7;
	} else{
		rows=10;
		cols=10;
	}
			



	setHTML("outputEl", "");

	addHTML("outputEl", "<img id='Bomb Counter' src='bomb.jpg'>" + "  d" + displayMines + "   a" + actualMines);
	addHTML("outputEl", "<br>");
	addHTML("outputEl", "<br>");
	addHTML("outputEl", "<br>");
	addHTML("outputEl", "<br>");


	for (r = 0; r < rows; r++) {
		for (c = 0; c < cols; c++) {

			var content = getNewSquare(r, c);
			//console.log("row: " + r + " col: " + " " + c +
			//	" content: " + content);

			if (content == 15) {

				var x = r;
				var y = c;

				addHTML("outputEl", `<img id='ImgS' src='square.jpg' alt='Regular Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;' >`);
				addHTML("outputEl", " ");
			} else if (content == 18) { //square with hidden bomb
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='ImgSB' src='square.jpg' alt='Regular Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 0) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='Img0' src='0.jpg' alt='Zero Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 16) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='ImgF' src='flag.jpg' alt='Flag Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 19) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='ImgFB' src='flag.jpg' alt='Flag Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 17) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='ImgB' src='bomb.jpg' alt='Bomb' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 1) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='Img1' src='1.jpg' alt='One Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 2) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='Img2' src='2.jpg' alt='Two Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 3) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='Img3' src='3.jpg' alt='Three Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 4) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='Img4' src='4.jpg' alt='Four Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 5) {
				var x = r;
				var y = c;
				addHTML("outputEl", `<img id='Img5' src='5.jpg' alt='Five Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			}
		}
		addHTML("outputEl", "<br>");
	}
	addHTML("outputEl", "<br>");
}