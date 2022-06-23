// Event listener to call showScore function after page loads
document.addEventListener("DOMContentLoaded", function() {
    showScore();
  });


// Function to increase score when player X wins
function wonx() {
        if(localStorage.getItem('scorex')==null){
            localStorage.setItem('scorex', '1');
            document.getElementById("scorex").innerHTML = 1;
        }
        else{
            var x = parseInt(localStorage.getItem('scorex'));
            x +=1;
            localStorage.setItem('scorex', x);
            document.getElementById("scorex").innerHTML = x;
        } 
}


// Function to increase score when player O wins
function wono() {
        if(localStorage.getItem('scoreo')==null){
            localStorage.setItem('scoreo', '1');
            document.getElementById("scoreo").innerHTML = 1;
        }
        else{
            var k = parseInt(localStorage.getItem('scoreo'));
            k +=1;
            localStorage.setItem('scoreo', k);
            document.getElementById("scoreo").innerHTML = k;
        } 
}

// Functon to show score of both players
function showScore() {
	
    var x = parseInt(localStorage.getItem('scorex'));
	if(localStorage.getItem('scorex')==null)
	{
		document.getElementById("scorex").innerHTML = 0;
	}else{
    document.getElementById("scorex").innerHTML = x;
	}

	var o = parseInt(localStorage.getItem('scoreo'));
    if(localStorage.getItem('scoreo')==null)
	{
		document.getElementById("scoreo").innerHTML = 0;
	}else{
    document.getElementById("scoreo").innerHTML = o;
	}
}


// Function called whenever a box is pressed
function myfunc() {
	// Getting values of all boxes
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Check if player X wins 
	/*
		Conditions to win are :
		[b1] [b2] [b3],
		[b4] [b5] [b6],
		[b7] [b8] [b9],
		[b1] [b4] [b7],
		[b3] [b5] [b8],
		[b3] [b6] [b9],
		[b1] [b5] [b9] and
		[b3] [b5] [b7] 
	*/
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wonx();
		window.alert('Player X won'); 
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wonx();
		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
        wonx();
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        wonx();
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        wonx();
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wonx();
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
        wonx();
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wonx();
		window.alert('Player X won');
	}

	// Check if player O wins
	/*
		Conditions to win are :
		[b1] [b2] [b3],
		[b4] [b5] [b6],
		[b7] [b8] [b9],
		[b1] [b4] [b7],
		[b3] [b5] [b8],
		[b3] [b6] [b9],
		[b1] [b5] [b9] and
		[b3] [b5] [b7] 
	*/
	else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' ||
		b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' ||
		b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' ||
		b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
        wono();
		window.alert('Player O won');
	}
	else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
		document.getElementById('print').innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        wono();
		window.alert('Player O won');
	}

	// If game Ties
	else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
		|| b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
		(b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
		b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
			document.getElementById('print').innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Print player turn
		if (flag == 1) {
			document.getElementById('print').innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print').innerHTML = "Player O Turn";
		}
	}
}

// Function to reset game(reset tiles)
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Function to start the game
function start(){
    location.start();
    document.getElementById('start');
}

// Check turn of the player and set value of button to X or O
flag = 1;

// Functions to change tiles to X or O
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
        document.getElementById("b1").style.color = "white";
        document.getElementById("b1").style.backgroundColor = "dodgerblue"; 
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "O";
        document.getElementById("b1").style.color = "white";
        document.getElementById("b1").style.backgroundColor = "green"; 
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
        document.getElementById("b2").style.color = "white";
        document.getElementById("b2").style.backgroundColor = "dodgerblue";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "O";
        document.getElementById("b2").style.color = "white";
        document.getElementById("b2").style.backgroundColor = "green";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
        document.getElementById("b3").style.color = "white";
        document.getElementById("b3").style.backgroundColor = "dodgerblue";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "O";
        document.getElementById("b3").style.color = "white";
        document.getElementById("b3").style.backgroundColor = "green";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
        document.getElementById("b4").style.color = "white";
        document.getElementById("b4").style.backgroundColor = "dodgerblue";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "O";
        document.getElementById("b4").style.color = "white";
        document.getElementById("b4").style.backgroundColor = "green";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
        document.getElementById("b5").style.color = "white";
        document.getElementById("b5").style.backgroundColor = "dodgerblue";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "O";
        document.getElementById("b5").style.color = "white";
        document.getElementById("b5").style.backgroundColor = "green";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
        document.getElementById("b6").style.color = "white";
        document.getElementById("b6").style.backgroundColor = "dodgerblue";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "O";
        document.getElementById("b6").style.color = "white";
        document.getElementById("b6").style.backgroundColor = "green";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
        document.getElementById("b7").style.color = "white";
        document.getElementById("b7").style.backgroundColor = "dodgerblue";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "O";
        document.getElementById("b7").style.color = "white";
        document.getElementById("b7").style.backgroundColor = "green";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
        document.getElementById("b8").style.color = "white";
        document.getElementById("b8").style.backgroundColor = "dodgerblue";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "O";
        document.getElementById("b8").style.color = "white";
        document.getElementById("b8").style.backgroundColor = "green";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
        document.getElementById("b9").style.color = "white";
        document.getElementById("b9").style.backgroundColor = "dodgerblue";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "O";
        document.getElementById("b9").style.color = "white";
        document.getElementById("b9").style.backgroundColor = "green";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}


// Function to reset score
function resetScore() {

	document.getElementById("scorex").innerHTML = 0;
	localStorage.setItem('scorex', '0');
	document.getElementById("scoreo").innerHTML = 0;
	localStorage.setItem('scoreo', '0');
}
