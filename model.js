// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19


function diff() {
	return document.getElementById("selection").value;
}

function myFunction(row, col) {
	console.log(row, col);
	addHTML("squareLocation", row + " " + col + " " + "|");

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
			if (actualMines=="0"){
				if(squareRevealCheck()){
					gameWin();
			}
			}
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
			//numberBombCheck(row,col);
			newGrid[row][col] = "4";
			reDrawGame();
		} else if (newGrid[row][col] == "18") {
			newGrid[row][col] = "17";
			reDrawGame();
			window.setTimeout(gameOver, 1000);

		} else if (newGrid[row][col] == "0") {
			//zeroCheck(row,col);
			reDrawGame();
		}

	}


}
var newGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];
function gameOver() {
	setHTML("outputEl", "You Clicked a Mine,Game Over!" + "<br>" + "<img src='bomb.jpg' alt='Bomb' height='200' width='200' >" +
		"<br>" + "Press new game button to try again!");
}

function gameWin() {
	setHTML("outputEl", "You won the game,Congrats!!" + "<br>" + "<img src='smiley.jpg' alt='Smiley' height='200' width='200' >" +
		"<br>" + "Press new game button to play again!");
}

function numberBombCheck(row, col) {

}

function zeroCheck(row, col) {

}
// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19
function squareRevealCheck() {
	var xx=9;
	var yy=9;
	var level3=diff();
	if (level3 == "easy") {
		xx= 3;
		yy=3;
	} else if (level3 == "medium") {
		xx=7;
		yy=7;
	} else{
		xx=10;
		yy=10;
	}
	var SRcontent = getNewSquare(xx, yy);
for (r = 0; r < xx; r++) {
		for (c = 0; c < yy; c++) {
			if (SRcontent == "15") {
				return false;
				r=xx;
				c=yy;
			}else if(SRcontent == "18") {
				return false;
				r=xx;
				c=yy;
			}
			
		}
}
return true;
}

function newGame() {
	newGrid = grid();
	var level2=diff();
	if (level2 == "easy") {
		rows= 3;
		cols=3;
		actualMines = 3;
		displayMines = 3;
	} else if (level2 == "medium") {
		rows=7;
		cols=7;
		actualMines = 7;
		displayMines = 7;
	} else{
		rows=10;
		cols=10;
		actualMines = 10;
		displayMines = 10;
	}
	
	setHTML("squareLocation", "");
	reDrawGame(newGrid);
}
function har(){
	var myArray = [[
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
	], [
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
	], [
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
	]]; 
	var random = myArray[Math.floor(Math.random() * myArray.length)];

return random;

}
function med(){
	var myArray2 = [[
		[18, 15, 15, 15, 15, 15, 15],
		[15, 15, 15, 15, 15, 18, 15],
		[15, 15, 15, 15, 15, 15, 15],
		[15, 18, 15, 15, 15, 15, 15],
		[15, 15, 15, 15, 18, 15, 15],
		[18, 15, 15, 15, 15, 15, 18],
		[15, 15, 18, 15, 15, 15, 15],
	], [
		[15, 15, 15, 15, 18, 15, 15],
		[15, 15, 15, 15, 15, 15, 18],
		[15, 15, 15, 15, 15, 15, 15],
		[15, 18, 15, 15, 15, 15, 15],
		[15, 15, 15, 15, 15, 15, 15],
		[18, 15, 15, 15, 15, 15, 18],
		[15, 15, 18, 15, 15, 18, 15],
	], [
		[15, 18, 15, 15, 15, 18, 15],
		[15, 15, 15, 15, 15, 15, 15],
		[15, 15, 15, 15, 18, 15, 15],
		[15, 18, 15, 15, 15, 15, 15],
		[15, 15, 15, 15, 15, 15, 15],
		[15, 15, 15, 15, 15, 15, 18],
		[15, 15, 15, 18, 18, 15, 15],
	]]; 
	var random2 = myArray2[Math.floor(Math.random() * myArray2.length)];

return random2;

}
function eas(){
	var myArray3 = [[
		[15, 15, 18],
		[18, 15, 15],
		[15, 18, 15],
	], [
		[18, 18, 15],
		[15, 15, 15],
		[15, 15, 18],
	], [
		[15, 15, 18],
		[15, 18, 15],
		[18, 15, 15],
	]]; 
	var random3 = myArray3[Math.floor(Math.random() * myArray3.length)];

return random3;

}
function grid() {
	var difficulty = diff();

	var easy = eas();
	console.log(easy);
	var medium = med();
	console.log(med);
	var hard = har();
	console.log(har);
	if (difficulty == easy) {
		return easy;
	} else if (difficulty == medium) {
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