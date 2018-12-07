function reDrawGame(rows, cols) {
	var rows=9;
	var cols=9;
	
	
	setHTML("outputEl", ""); 
	
 addHTML("outputEl","0" + " seconds");
addHTML("outputEl", "<br>");
addHTML("outputEl", "<br>");
addHTML("outputEl", "<br>");
addHTML("outputEl", "<br>");
	
   
    for (r = 0; r < rows; r++) {
	for (c = 0; c < cols; c++) {
		
	    var content = getNewSquare(r, c);
	   console.log("row: " + r + " col: " + " " + c
			+ " content: " + content);
			
			 if (content == 15) {
				 
				var x=r;
				var y=c;
				
				addHTML("outputEl", `<img id='ImgS' src='square.jpg' alt='Regular Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;' >`);
		 addHTML("outputEl", " ");
			}else if (content == 18) {           //square with hidden bomb
			var x=r;
				var y=c;
				addHTML("outputEl", `<img id='ImgSB' src='square.jpg' alt='Regular Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);
		 addHTML("outputEl", " ");
			}else if(content==0){
				var x=r;
				var y=c;
			addHTML("outputEl", `<img id='Img0' src='0.jpg' alt='Zero Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);    
		 addHTML("outputEl", " ");
			}else if(content==16){
				var x=r;
				var y=c;
			addHTML("outputEl", `<img id='ImgF' src='flag.jpg' alt='Flag Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);    
		 addHTML("outputEl", " ");
			}else if(content==19){
				var x=r;
				var y=c;
			addHTML("outputEl", `<img id='ImgFB' src='flag.jpg' alt='Flag Square' onMouseDown='myFunction(${x},${y})' oncontextmenu='return false;'>`);    
		 addHTML("outputEl", " ");
			}
	}
	addHTML("outputEl", "<br>");
    }
	
}








function gen(rows, cols) {
	var rows=9;
	var cols=9;
	
	
	setHTML("outputEl", ""); 
	
 addHTML("outputEl",time + " seconds");
addHTML("outputEl", "<br>");
addHTML("outputEl", "<br>");
	
   
    for (r = 0; r < rows; r++) {
	for (c = 0; c < cols; c++) {
		
	    var content = getSquare(r, c);
	   console.log("row: " + r + " col: " + " " + c
			+ " content: " + content);
			if(content==0){
			addHTML("outputEl", "<img id='Img' src='0.jpg' alt='Zero Square' onclick='myFunction(x,y)'>");    
		 addHTML("outputEl", " ");
			}else if (content == 1) {
				addHTML("outputEl", "<img id='Img' src='1.jpg' alt='One Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 2) {
				addHTML("outputEl", "<img id='Img' src='2.jpg' alt='Two Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 3) {
				addHTML("outputEl", "<img id='Img' src='3.jpg' alt='Three Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 4) {
				addHTML("outputEl", "<img id='Img' src='4.jpg' alt='Four Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 5) {
				addHTML("outputEl", "<img id='Img' src='5.jpg' alt='Five Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 15) {
				var x=gen.rows;
				var y=gen.cols;
				addHTML("outputEl", "<img id='Img' src='square.jpg' alt='Regular Square' onclick='myFunction(x,y)' >");
		 addHTML("outputEl", " ");
			}else if (content == 16) {
				addHTML("outputEl", "<img id='Img' src='flag.jpg' alt='flag Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 17) {
				addHTML("outputEl", "<img id='Img' src='bomb.jpg' alt='Bomb Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 18) {           //square with hidden bomb
				addHTML("outputEl", "<img id='Img' src='square.jpg' alt='Regular Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}else if (content == 19) {    //flag with bomb
				addHTML("outputEl", "<img id='Img' src='flag.jpg' alt='Flag Square' onclick='myFunction(x,y)'>");
		 addHTML("outputEl", " ");
			}
	}
	addHTML("outputEl", "<br>");
    }
	
}
//setClickHandler("drawGridBtn", gen);
//setClickHandler("drawNewGame", newGame);



