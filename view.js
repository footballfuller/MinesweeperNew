var actualMines = 10;
var displayMines = 10;

function bomb_finder (){}

function zeroMaker(rows, cols) {
	
	for (r = 0; r < rows; r++) {
		for (c = 0; c < cols; c++) {

		}
	}
	// fix me         
	for(var x=0;x<columns;x++) {       // For each column
	for(y=0;y<rows+1;y++)        // and each row:
			{
			if(check(x,y)!='mine') //if the cell is not a mine:
					{
					board[x+y*columns]= // the value of the cell is the sum of mines in the eight neighboring tiles:
					 ((check(x,y+1)=='mine')|0)        // down
					+((check(x-1,y+1)=='mine')|0)        // down & left
					+((check(x+1,y+1)=='mine')|0)        // down & right
					+((check(x,y-1)=='mine')|0)        // up
					+((check(x-1,y-1)=='mine')|0)        // up & left
					+((check(x+1,y-1)=='mine')|0)        // up & right
					+((check(x-1,y)=='mine')|0)        // left
					+((check(x+1,y)=='mine')|0);        // right.
					}
			}
	}
}



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
				x = r;
				y = c;
				addHTML("outputEl", `<img id='ImgS' src='square.jpg' alt='Regular Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;' >`);
				addHTML("outputEl", " ");
			} else if (content == 18) { //square with hidden bomb
				x = r;
				y = c;
				addHTML("outputEl", `<img id='ImgSB' src='square.jpg' alt='Regular Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 0) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='Img0' src='0.jpg' alt='Zero Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 16) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='ImgF' src='flag.jpg' alt='Flag Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 19) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='ImgFB' src='flag.jpg' alt='Flag Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 17) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='ImgB' src='bomb.jpg' alt='Bomb' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 1) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='Img1' src='1.jpg' alt='One Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 2) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='Img2' src='2.jpg' alt='Two Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 3) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='Img3' src='3.jpg' alt='Three Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 4) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='Img4' src='4.jpg' alt='Four Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			} else if (content == 5) {
				x = r;
				y = c;
				addHTML("outputEl", `<img id='Img5' src='5.jpg' alt='Five Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
				addHTML("outputEl", " ");
			}
		}
		addHTML("outputEl", "<br>");
	}
	addHTML("outputEl", "<br>");
	if(!squareRevealCheck()){
		gameWin();
	}
}