var dreamMusic = new Audio(src = "assets/music/dreamMusic.mp3")


$(document).ready(function(){

	$(document).on("click", "#goUnderButton", function(){

		dreamMusic.play();
		console.log("click");
		$("#quizSection").removeClass("hidden");
		$("#headerRow").addClass("hidden");
	});











});