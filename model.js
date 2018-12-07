var grid =  [[0, 1, 19, 1, 0, 15, 15, 15, 15] , 
			[15, 2, 1, 1, 0, 15, 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[19, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 19, 19] ,
			[15, 15, 15, 15, 15, 15 , 15, 19, 3] ];
			
			

// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19


var newGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];


var blankGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];
			
			
var gameLost=false;
var gameWon=false;
var bombsLeft= 6;
var time= 20;




function adjacentBombs(){
	//for the square count how many squares have a bomb  adjacent to it
}

function clickSquare(){
	//check if square has been clicked then see if bomb is under square,if so end game(lose), if not change grid number to represent new icon with number revealing adjacent bombs
}

function placeFlag(){
	//places flag on square and changes content number based on if there is a bomb there. if there is bomb there decrease bombs left by one, if bombs left is zero end game(win)
}

function clicked(content){  //if the square has been clicked previously
	if(content==15){
		return false;
	}else if(content==18){
		return false;
	}else if(content==16){
		return false;
	}else if(content==19){
		return false;
	}else{
		return true;
	}
}

function hasBomb(content){  //if square has a bomb 
	if(content==18){
		return true;
	}else if(content==19){
		return true;
	} else{
		return false;
	}
}


function getSquare(row, col) { 
   return grid[row][col];
}

function getNewSquare(row,col){
	return newGrid[row][col];
}

function getBlankSquare(row,col){
	return blankGrid[row][col];
}


function myFunction(row,col) { 
console.log( row,col);

//var a = newGrid.indexOf( document.getElementById("Img"));
   // document.getElementById("squareLocation").innerHTML = a;

  // addHTML("squareLocation", a);
addHTML("squareLocation", row + " " + col + " " + "|");


if(flagRightClick()) {
	if (newGrid[row][col]=="15"){
			newGrid[row][col]= "16";
			reDrawGame();
	}else if(newGrid[row][col]=="18"){
			newGrid[row][col]= "19";
			reDrawGame();
	}else if(newGrid[row][col]=="16"){
			newGrid[row][col]= "15";
			reDrawGame();
	}else if(newGrid[row][col]=="19"){
			newGrid[row][col]= "18";
			reDrawGame();
	}
 }else{
	 newGrid[row][col]= "0";
     reDrawGame();
 }
 

}

function newGame(){
	newGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];
	
    setHTML("squareLocation", ""); 	
	reDrawGame();
}

function search(ele) { 
if(event.keyCode == 13 ) { addHTML("nameContainer", ele.value);} 
}

function dropDown(){
	 var selectedValue = document.getElementById("selection").value;
		setHTML("difficultyContainer","Difficulty: " + selectedValue); 
}
dropDown();
//function enterName2(){
	//alert("key pressed");
	//var person =document.getElementById("name").addEventListener("onkeypress", function(event) { event.preventDefault(); 
	//if (event.keyCode === 13) { 
	//document.getElementById("name").click();
	//addHTML("nameContainer", person); 
	//} };
	
	
	
//}


//function myFunction(row,col){
//var cell= document.getElementById( "Img" ).onclick = function() {
    // img clicked
	//alert(cell.value);
//};
//}


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
	if(responseJson.result == "invalid"){
	dataSpan.innerHTML = "Your password is incorrect" ;
	
  }else if (responseJson.result == "valid"){
	  localStorage.userName=responseJson.userName;
	  localStorage.timestamp=responseJson.timestamp;
	var storageName=localStorage.userName;
    var storageTimestamp=localStorage.timestamp;
	var cs2550timestamp=storageName + " " + storageTimestamp;
	localStorage.cs2550timestamp=cs2550timestamp;
	  window.open("gamePage.html", "_self");
	 
  }
  
    
}

function displayStorage(){
	var cs2550timestamp=localStorage.cs2550timestamp;
	addHTML("Storage", cs2550timestamp );
}

function clearStorage(){
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
	var newXNumber =xemail.firstChild.data;

	html += "<br>";
    }
	
	var xmlrows2 = xmldoc.getElementsByTagName("ycoordinate");
	 for (var r = 0; r < xmlrows.length; r++) {
	var xmlrow = xmlrows2[r];
	html += "Coordinate: " + xmlrow.getAttribute("name");

	// NOTE THAT getElementsByTagName RETURNS A LIST
	var xemail = xmlrow.getElementsByTagName("ynumber")[0];
	html += " Location " + xemail.firstChild.data;
	var newYNumber =xemail.firstChild.data;

	html += "<br>";
    }
    //var xValue=xmlrows.xmldoc.getElementsByTagName("number");
     //var newx= xValue.firstchild.data;
	//var yValue=xmldoc.getElementById("yNumber");
    addressDiv.innerHTML = html + newXNumber  + ", " + newYNumber;
	myFunction(newXNumber,newYNumber);
}

 function audio(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

function flagRightClick(){
	var rightclick;
	if (!e) var e = window.event;
	if (e.which) rightclick = (e.which == 3);
	else if (e.button) rightclick = (e.button == 2) ;
	//alert('Rightclick: ' + rightclick); // true or false
	if (rightclick==true){
		//alert('Rightclick: ' + rightclick); // true or false
		return true;
	}else if (rightclick==false){
		//alert('Rightclick: ' + rightclick); // true or false
		return false;
	}
}
