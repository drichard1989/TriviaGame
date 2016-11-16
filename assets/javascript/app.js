


$(document).ready(function(){

// All the variables I will need
var dreamMusic = new Audio(src = "assets/music/dreamMusic.mp3")
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeAllowed = 95;
var counter ;

function run() {
	counter = setInterval(decrement, 1000);
};

function decrement () {
	timeAllowed--;
	$("#timeAllowed").html("<h2>" + timeAllowed + "</h2>");
};

	// Me playing with the fadeIn method. Not working...
	// $("#headerRow").fadeIn(1000);

	// Here, on the click of the go under button, this will start the quiz,
	// music will play, it will hide the intro section and show the quiz section.
	$(document).on("click", "#goUnderButton", function(){

		dreamMusic.play();
		console.log("click");
		$("#headerRow").fadeOut(1000);
		$("#quizSection").delay(1000).fadeIn(7000);
		



		 // Note -- When I have this running, the quiz dissapears after 1 second. 
		run();


	});











});