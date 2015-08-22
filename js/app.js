var score = 0 // start with no score
var questionFlag = 1 // which question are you on
var myNumber = Math.floor((Math.random() * 20) + 1); // pick a random number
// reset the animation on the text
function typeToggle() {
	var e = document.getElementById("question")
	e.classList.remove("typing")
	e.offsetWidth = e.offsetWidth
	e.classList.add("typing");
}
// shake the screen
function showError() {
	var e = document.getElementById("frame")
	e.classList.remove("shake")
	e.offsetWidth = e.offsetWidth
	e.classList.add("shake");
}
// questions and answers
quiz = {};
switchQuestion();

function switchQuestion() {
	switch (questionFlag) {
		case 1:
			console.log("it was case 1 in switch");
			quiz.answer = {
				"paul rand": true
			};
			break;
		case 2:
			console.log("it was case 2 in switch");
			quiz.answer = {
				"paula scher": true
			};
			quizdata = {
				image: "./images/paula.jpg",
				headline: "She drew the logo for Citi on a napkin at lunch",
				choices: ["April Greiman", "Yuko Takagi", "Paula Scher", "Lucia Collela"]
			};
			break;
	};
}

// click listener and behaviors
$(document).on('mousedown', '.button', function() {
	var guess = ($(this).text().toLowerCase());
	if ((quiz.answer[guess]) === true) {
		console.log("evaluated to true boolean")
			// correct answer behavior
		score = (score + 1);
		questionFlag = (questionFlag + 1);
		console.log("Current score is " + score);
		$(".overlay").fadeIn(1000);
		$("a.close").click(function() {
			// go to next question behavior
			$(".overlay").fadeOut(1000);
			switchQuestion();
			console.log("you are now on question " + questionFlag);
			console.log(quiz.answer);
			$('.big-photo').css('background-image', 'url(' + quizdata.image + ')');
			$('h1.question').text(quizdata.headline);
			typeToggle() //reset headline animation
			$('#choice-one').text(quizdata.choices[0]);
			$('#choice-two').text(quizdata.choices[1]);
			$('#choice-three').text(quizdata.choices[2]);
			$('#choice-four').text(quizdata.choices[3]);
		});
	} else {
		console.log("false")
			// wrong answer behavior
		showError();
	}
});

// *** to do list
// use random number to select question
// avoid repeat questions
// go to next question behavior
// tally score at the end behavior
// maybe score is number of guesses relative to correct answers (accuracy)