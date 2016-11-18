$(document).ready(function(){

// All the variables I will need
var dreamMusic = new Audio(src = "assets/music/dreamMusic.mp3")
var totalNumberOfQuestions = 10;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeAllowed = 95;
var counter ;
var unansweredQuestions = 0;

// This function is called when the reset button is clicked at the end of the quiz. 
// Resets all variables, and restarts the order of events for the quiz.
function reset(){
	correctAnswer = 0;
	incorrectAnswer = 0;
	unansweredQuestions = 0;
	$("#resultsSection").fadeOut(1000);
	$("#headerRow").delay(1000).fadeIn(5000);
	$('input[type="radio"]:checked').prop('checked', false);

};

// This function sets the formula to reduce at a rate of 1 second per reduction
function run() {
	counter = setInterval(decrement, 1000);
};

function stop() {
	clearInterval(counter);
};

// This function sets the reduction, and also posts that number dynamically on the webpage using jQuery
function decrement () {
	timeAllowed--;
	$("#timeAllowed").html("<h2>" + timeAllowed + "</h2>");

	if (timeAllowed == 0) {
		startTheKick();
	}
};

// This function starts music, fades out the intro #headerRow, and fades in the #quizSection.
function goUnder(){
		dreamMusic.play();
		$("#headerRow").fadeOut(1000);
		$("#quizSection").delay(1000).fadeIn(7000);
		run();
};

// This function will fade out the quiz, fade in the results, which will display the amount of 
// correct answers, incorrect answers, and unanswered questions dynamically by using jquery to write it in. 
function startTheKick(){
	$("#quizSection").fadeOut(1000);
	$("#resultsSection").delay(1000).fadeIn(5000);
	
	$("input:checked").each(function(){
		if($(this).val() == "true"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		};
		unansweredQuestions = totalNumberOfQuestions -(correctAnswer + incorrectAnswer);

	$("#results").html("<h3> Your Results</h3><hr><p>Correct Answers : "+ correctAnswer + "</p> <p>Incorrect Answers: " + incorrectAnswer + "</p><p>Unanswered Questions: " + unansweredQuestions + "</p>")
	});
	stop();
	timeAllowed = 95;
};

	// Here, on the click of the #goUnderButton, this will start the quiz,
	// music will play, it will hide the intro section and show the quiz section.
	$(document).on("click", "#goUnderButton", function(){
		goUnder();
	});

	// This will move the game to the results page by running the function startTheKick if the button is clicked.
	$(document).on("click", "#startTheKick", function(){
		startTheKick();
	});
	// This will reset the game by running the function reset.
	$(document).on("click", "#resetTheDream", function(){
		reset();
	});

});