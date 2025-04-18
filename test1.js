/**
 * 
 */
//function btnClicked() {
//	return alert('button4 clicked');
//}
//
//function eventHandler(string) {
//	return alert(string)
//}
//
//function eventHandler2(num1 = 0, num2 = 0) {
//	return num1 + num2;
//}
let level = 1;

function showLevel() {
	document.getElementById("level").innerHTML = `The current level is <br> ${level}`;
}

showLevel();

let difficulty = 10;

//let backGroundColor = document.getElementById("background").style.backgroundColor;

function changeDifficulty() {
	difficulty *= 3;
}
let highScore = null;
	


function setLevelColor() {
	document.getElementById("background").style.backgroundColor = `hsl(${(level * 20) + 60}, 100%, 50%)`;
}


let highScoreArray = [];



function startNumberGame(int) {
	let highScoreMessage = "";
	let answer = Math.floor(Math.random() * difficulty + 1)
	let promptResponse = prompt(`Please enter a number between 1 and ${difficulty}`);
	let loops = 1;
	function printHighScore() {
		let highScoreLocation = document.getElementById("printedHighScore");
		highScoreArray.push(`Your score for level ${level} is :   ${loops}<br>`)
		highScoreLocation.innerHTML = highScoreArray.join("");
	};
	while (true) {
		  if (promptResponse === null) {
			break;
		 } else if (promptResponse == answer) {
			if (loops < highScore || highScore == undefined) {
				highScoreMessage += `Congratulations your new high score is ${loops} \n`;
				printHighScore();
				break;
			} 
			alert(`You won! \n ${highScoreMessage}\n Current attempts : ${loops}`);
			loops = 0;
			break;
		} else if (promptResponse < 0 || promptResponse > difficulty) {
			promptResponse = prompt(`Please enter a number between 1 and ${difficulty} \n Out of bounds number. \n Current attempts : ${loops}`)	
		}	else if (promptResponse < answer) {
			promptResponse = prompt(`Please enter a number between 1 and ${difficulty} \n the correct number is bigger than the inputted number. \n Current attempts : ${loops}`)
		} else if (promptResponse > answer) {
			promptResponse = prompt(`Please enter a number between 1 and ${difficulty} \n the correct number is smaller than the inputted number. \n Current attempts : ${loops}`)
		}
		loops++;
	}
}

function nextLevel() {
	setLevelColor();
	level++;
	showLevel();
	changeDifficulty();
	startNumberGame();
}
