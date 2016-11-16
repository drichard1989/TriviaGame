


$(document).ready(function(){

// All the variables I will need
var dreamMusic = new Audio(src = "assets/music/dreamMusic.mp3")
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeAllowed = 95;
var counter ;

function reset(){
	correctAnswer = 0;
	incorrectAnswer = 0;
	timeAllowed = 95;
	$("#resultsSection").fadeOut(1000);
	$("#headerRow").delay(1000).fadeIn(5000);
}

// This function sets the formula to reduce at a rate of 1 second per reduction
function run() {
	counter = setInterval(decrement, 1000);
};


// This function reduces the time, and at 0, runs the funcion that will kick it to the next page. 
function decrement () {
	timeAllowed--;
	$("#timeAllowed").html("<h2>" + timeAllowed + "</h2>");

	if (timeAllowed == 0) {
		startTheKick();
	}
};

	// Here, on the click of the go under button, this will start the quiz,
	// music will play, it will hide the intro section and show the quiz section.
	$(document).on("click", "#goUnderButton", function(){

		goUnder();
		


	});


	function goUnder(){
		dreamMusic.play();
		console.log("click");
		$("#headerRow").fadeOut(1000);
		$("#quizSection").delay(1000).fadeIn(7000);
		run();
	};
	// This function will send me to the next page. This funciton I think should calculate the results.
	function startTheKick(){
		$("#quizSection").fadeOut(1000);
		$("#resultsSection").delay(1000).fadeIn(5000);
	};

	// This will move the game to the results page by running the function startTheKick if the button is clicked.
	$(document).on("click", "#startTheKick", function(){
		startTheKick();
		
	});

	$(document).on("click", "#resetTheDream", function(){
		reset();
	});











});