// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19

///////////////////
//   Globals     //
///////////////////

var currentState = []; // Current Grid
var currentLvl; // Current Difficulty 
var newGrid;

////////////////////
function numberBombCheck(b, a) {

	var sum = 0;
	var x = b;
	var y = a;
	// and each row:
	//if the cell is not a mine continue to check for bombs near by.


	// the value of this box is the sum of the mines in the eight neighboring tiles:
	if (getNewSquare(x, y + 1) == '18' || getNewSquare(x, y + 1) == '19') { // down
		sum++;
	}
	if (getNewSquare(x - 1, y + 1) == '18' || getNewSquare(x - 1, y + 1) == '19') { // down & left
		sum++;
	}
	if (getNewSquare(x + 1, y + 1) == '18' || getNewSquare(x + 1, y + 1) == '19') { // down & right
		sum++;
	}
	if (getNewSquare(x, y - 1) == '18' || getNewSquare(x, y - 1) == '19') { // up
		sum++;
	}
	if (getNewSquare(x - 1, y - 1) == '18' || getNewSquare(x - 1, y - 1) == '19') { // up & left
		sum++;
	}
	if (getNewSquare(x + 1, y - 1) == '18' || getNewSquare(x + 1, y - 1) == '19') { // up & right
		sum++;
	}
	if (getNewSquare(x - 1, y) == '18' || getNewSquare(x - 1, y) == '19') { // left
		sum++;
	}
	if (getNewSquare(x + 1, y) == '18' || getNewSquare(x + 1, y) == '19') { // right.
		sum++;
	}

	console.log("sum: " + sum);
	return sum; //number of bombs next to current cell;
}

function diff() {
	return document.getElementById("selection").value;
}

function getNewSquare(row, col) {
	var x7;
	var y7;
	var level7 = diff();

	if (level7 == "easy") {
		x7 = 3;
		y7 = 3;
	} else if (level7 == "medium") {
		x7 = 7;
		y7 = 7;
	} else {
		x7 = 10;
		y7 = 10;
	}
	if (row < 0 || col < 0) {
		return;
	}
	if (row > x7 - 1 || col > y7 - 1) {
		return;
	}

	return newGrid[row][col];
}

function myFunction(row, col) {
	console.log(row, col);
	// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19

	if (flagRightClick()) {
		if (newGrid[row][col] == "15") {
			newGrid[row][col] = "16";
			displayMines--;
			reDrawGame();
		} else if (newGrid[row][col] == "18") {
			newGrid[row][col] = "19";
			displayMines--;
			actualMines--;
			reDrawGame();
		} else if (newGrid[row][col] == "16") {
			newGrid[row][col] = "15";
			displayMines++;
			reDrawGame();
		} else if (newGrid[row][col] == "19") {
			newGrid[row][col] = "18";
			displayMines++;
			actualMines++;
			reDrawGame();
		}
	} else {
		if (newGrid[row][col] == "15") {
			var nbn = numberBombCheck(row, col);
			newGrid[row][col] = nbn;
			//if (nbn == 0) {
			//	reDrawGame();
			//	zeroCheck(row,col);
			//}
			reDrawGame();
		} else if (newGrid[row][col] == "18") {
			newGrid[row][col] = "17";
			reDrawGame();
			window.setTimeout(gameOver, 1000);
		}

	}


}



function gameOver() {
	setHTML("outputEl", "You Clicked a Mine,Game Over!" + "<br>" + "<img src='bomb.jpg' alt='Bomb' height='200' width='200' >" +
		"<br>" + "Press new game button to try again!");
}

function gameWin() {
	setHTML("outputEl", "You won the game,Congrats!!" + "<br>" + "<img src='smiley.jpg' alt='Smiley' height='200' width='200' >" +
		"<br>" + "Press new game button to play again!");
}

function zeroCheck(t, z) {
	var x = t;
	var y = z;

	if (getNewSquare(x, y + 1) == '0' ) { // down
		newGrid[x][y + 1] = "0";
		reDrawGame();
	}
	if (getNewSquare(x - 1, y + 1) == '0' ) { // down & left
		newGrid[x - 1][y + 1] = "0";
		reDrawGame();
	}
	if (getNewSquare(x + 1, y + 1) == '0' ) { // down & right
		newGrid[x + 1][y + 1] = "0";
		reDrawGame();
	}
	if (getNewSquare(x, y - 1) == '0' ) { // up
		newGrid[x][y - 1] = "0";
		reDrawGame();
	}
	if (getNewSquare(x - 1, y - 1) == '0' ) { // up & left
		newGrid[x - 1][y - 1] = "0";
		reDrawGame();
	}
	if (getNewSquare(x + 1, y - 1) == '0') { // up & right
		newGrid[x + 1][y - 1] = "0";
		reDrawGame();
	}
	if (getNewSquare(x - 1, y) == '0' ) { // left
		newGrid[x - 1][y] = "0";
		reDrawGame();
	}
	if (getNewSquare(x + 1, y) == '0') { // right.
		newGrid[x + 1][y] = "0";
		reDrawGame();
	}
}
// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19
function squareRevealCheck() {
	var xx;
	var yy;
	var level3 = diff();

	if (level3 == "easy") {
		xx = 3;
		yy = 3;
	} else if (level3 == "medium") {
		xx = 7;
		yy = 7;
	} else {
		xx = 10;
		yy = 10;
	}

	if (actualMines == "0") {
		for (r = 0; r < xx; r++) {
			for (c = 0; c < yy; c++) {
				var SRcontent = getNewSquare(r, c);
				console.log(SRcontent);
				if (SRcontent == "16") {
					r = xx;
					c = yy;
					return true;

				} else if (SRcontent == "15") {
					r = xx;
					c = yy;
					return true;


				} else if (SRcontent == "18") {
					r = xx;
					c = yy;
					return true;

				}

			}
		}
	} else {
		return true;
	}
}


function changeState(arr) {
	currentState = [arr];
	return currentState;
}

function curLvl(i) {
	currentLvl = i;
	return currentLvl;
}

function newGame() {
	newGrid = grid();
	changeState(grid());
	console.log(newGrid);
	var level2 = diff();
	curLvl(level2);
	if (level2 == "easy") {
		rows = 3;
		cols = 3;
		actualMines = 3;
		displayMines = 3;
	} else if (level2 == "medium") {
		rows = 7;
		cols = 7;
		actualMines = 7;
		displayMines = 7;
	} else {
		rows = 10;
		cols = 10;
		actualMines = 10;
		displayMines = 10;
	}

	setHTML("squareLocation", "");
	reDrawGame(newGrid);
}

function har() {
	var myArray = [
		[
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 18, 15, 15, 15, 15, 15, 18, 15],
			[15, 15, 18, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 18, 15, 15, 15, 15, 15, 15],
			[18, 15, 15, 15, 15, 15, 15, 15, 18, 15],
			[18, 15, 15, 18, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 18, 15, 15, 15, 15, 18, 15, 15],
		],
		[
			[15, 15, 15, 15, 15, 15, 18, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 18, 15, 15, 15, 15, 15, 18, 15],
			[15, 15, 15, 15, 15, 18, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 18, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 18, 15, 15, 18],
			[18, 15, 15, 18, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 18, 15, 15, 15, 15],
		],
		[
			[15, 15, 18, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 18, 15, 15, 15, 15, 15, 18, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[18, 15, 15, 18, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 18, 15, 15, 15, 15, 15, 15],
			[18, 15, 15, 15, 15, 15, 15, 15, 18, 15],
			[15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			[15, 15, 18, 15, 15, 15, 15, 18, 15, 15],
		]
	];
	var random = myArray[Math.floor(Math.random() * myArray.length)];
	//function call to create zeros and other numbers
	return random;

}

function med() {
	var myArray2 = [
		[
			[18, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 18, 15],
			[15, 15, 15, 15, 15, 15, 15],
			[15, 18, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 18, 15, 15],
			[18, 15, 15, 15, 15, 15, 18],
			[15, 15, 18, 15, 15, 15, 15],
		],
		[
			[15, 15, 15, 15, 18, 15, 15],
			[15, 15, 15, 15, 15, 15, 18],
			[15, 15, 15, 15, 15, 15, 15],
			[15, 18, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15],
			[18, 15, 15, 15, 15, 15, 18],
			[15, 15, 18, 15, 15, 18, 15],
		],
		[
			[15, 18, 15, 15, 15, 18, 15],
			[15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 18, 15, 15],
			[15, 18, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 15],
			[15, 15, 15, 15, 15, 15, 18],
			[15, 15, 15, 18, 18, 15, 15],
		]
	];
	var random2 = myArray2[Math.floor(Math.random() * myArray2.length)];

	return random2;

}

function eas() {
	var myArray3 = [
		[
			[15, 15, 18],
			[18, 15, 15],
			[15, 18, 15],
		],
		[
			[18, 18, 15],
			[15, 15, 15],
			[15, 15, 18],
		],
		[
			[15, 15, 18],
			[15, 18, 15],
			[18, 15, 15],
		]
	];
	var random3 = myArray3[Math.floor(Math.random() * myArray3.length)];

	return random3;

}

function grid() {
	var difficulty = diff();

	var easy = eas();
	var medium = med();
	var hard = har();
	if (difficulty == "easy") {
		return easy;
	} else if (difficulty == "medium") {
		return medium;
	} else return hard;
}

function search(ele) {
	if (event.keyCode == 13) {
		addHTML("nameContainer", ele.value);
	}
}


// ========= MINI GUI LIBRARY =================

function setHTML(id, html) {
	var element = document.getElementById(id);
	element.innerHTML = html;
}

function addHTML(id, html) {
	var element = document.getElementById(id);
	element.innerHTML = element.innerHTML + html;
}

function setClickHandler(id, func) {
	var element = document.getElementById(id);
	element.onclick = func;
}

function getInput(id) {
	return document.getElementById(id).value;
}

// ============================================

function loadSyncPost() {
	var userName = document.getElementById("username").value;
	var userPassword = document.getElementById("password").value;
	var data = "userName=" + userName + "&" + "password=" + userPassword;
	var Request = new XMLHttpRequest();

	Request.open("POST", "minesweeper.json", false);
	Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	Request.send(data);

	var dataSpan = document.getElementById("passwordFail");
	var responseJson = JSON.parse(Request.responseText);
	if (responseJson.result == "invalid") {
		dataSpan.innerHTML = "Your password is incorrect";

	} else if (responseJson.result == "valid") {
		localStorage.userName = responseJson.userName;
		localStorage.timestamp = responseJson.timestamp;
		var storageName = localStorage.userName;
		var storageTimestamp = localStorage.timestamp;
		var cs2550timestamp = storageName + " " + storageTimestamp;
		localStorage.cs2550timestamp = cs2550timestamp;
		window.open("gamePage.html", "_self");

	}


}

function displayStorage() {
	var cs2550timestamp = localStorage.cs2550timestamp;
	addHTML("Storage", cs2550timestamp);
}

function clearStorage() {
	localStorage.clear();
	setHTML("Storage", "Local Storage Length: " + localStorage.length);
}

//----------------------------------------------------------//


function getAddresses() {
	var request = new XMLHttpRequest();
	request.open("GET", "minesweeper.xml", false);
	request.send(null);



	var addressDiv = document.getElementById("addressDiv");
	var html = "";

	var xmldoc = request.responseXML;

	// THE FOLLOWING CODE USES THE SAME XML STRUCTURE (AND A FEW OF THE
	// SAME VARIABLE NAMES) AS Example 21-7 IN JavaScript: The Definitive Guide
	// BY DAVID FLANAGAN, BUT THIS EXAMPLE IS A LOT SIMPLER.

	var xmlrows = xmldoc.getElementsByTagName("xcoordinate");

	for (var r = 0; r < xmlrows.length; r++) {
		var xmlrow = xmlrows[r];
		html += "Coordinate: " + xmlrow.getAttribute("name");

		// NOTE THAT getElementsByTagName RETURNS A LIST
		var xemail = xmlrow.getElementsByTagName("xnumber")[0];
		html += " Location " + xemail.firstChild.data;
		var newXNumber = xemail.firstChild.data;

		html += "<br>";
	}

	var xmlrows2 = xmldoc.getElementsByTagName("ycoordinate");
	for (var r = 0; r < xmlrows.length; r++) {
		var xmlrow = xmlrows2[r];
		html += "Coordinate: " + xmlrow.getAttribute("name");

		// NOTE THAT getElementsByTagName RETURNS A LIST
		var xemail = xmlrow.getElementsByTagName("ynumber")[0];
		html += " Location " + xemail.firstChild.data;
		var newYNumber = xemail.firstChild.data;

		html += "<br>";
	}
	//var xValue=xmlrows.xmldoc.getElementsByTagName("number");
	//var newx= xValue.firstchild.data;
	//var yValue=xmldoc.getElementById("yNumber");
	addressDiv.innerHTML = html + newXNumber + ", " + newYNumber;
	myFunction(newXNumber, newYNumber);
}

function audio() {
	var audio = document.getElementById("audio");
	audio.play();
}

function flagRightClick() {
	var rightclick;
	if (!e) var e = window.event;
	if (e.which) rightclick = (e.which == 3);
	else if (e.button) rightclick = (e.button == 2);
	//alert('Rightclick: ' + rightclick); // true or false
	if (rightclick == true) {
		//alert('Rightclick: ' + rightclick); // true or false
		return true;
	} else if (rightclick == false) {
		//alert('Rightclick: ' + rightclick); // true or false
		return false;
	}
}