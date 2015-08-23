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
			quiz.answer = {
				"paul rand": true
			};
			quizdata = {
				explain: "It was a team effort led by Eliot Noyes, but Paul Rand’s series of IBM logos culminated in a 1972 version formed from stacked stripes."
			}
			break;
		case 2:
			quiz.answer = {
				"paula scher": true
			};
			quizdata = {
				image: "./images/paula.jpg",
				headline: "She drew the logo for Citi on a napkin at lunch",
				choices: ["April Greiman", "Yuko Takagi", "Paula Scher", "Lucia Collela"],
				explain: "Paula Scher reminds us that \"the designer needs to be ever present because, inevitably, at some side meeting, something will be suggested that will totally destroy the form of the logo.\""
			};
			break;
		case 3:
			quiz.answer = {
				"death star": true
			};
			quizdata = {
				image: "./images/logo-nicknames.jpg",
				headline: "What does the AT&T design staff affectionately call its logo?",
				choices: ["Exploding Pizza", "Venetian Blinds", "Death Star", "2.5 Hot Dogs"],
				explain: "Legend has it, they like to refer to it as The Death Star. The other nicknames were real, too. Warner is \"2.5 Hot Dogs,\" and the Canadian Broadcasting Corporation is \"The Exploding Pizza.\" NASA is known as \"The Worm.\" Watch out, Luke!"
			};
			break;
		case 4:
			quiz.answer = {
				"solid line": true
			};
			quizdata = {
				image: "./images/franklin-gothic.jpg",
				headline: "Which one is the real Franklin Gothic?",
				choices: ["Solid Line", "Not Franklin", "Dotted Line", "Whatever..."],
				explain: "The museum spent millions of dollars, according to the New York Times, to \'tighten the M and pinch the o\' in order to make the typography historically correct."
			};
			break;
		case 5:
			quiz.answer = {
				"first": true
			};
			quizdata = {
				image: "./images/kodak-yellow.jpg",
				headline: "This is Kodak Yellow",
				choices: ["First", "Third", "Second", "Fourth"],
				explain: "Kodak Yellow is actually kinda orange, depending on who you ask. This color sets Kodak apart from the sea of blue in which brands swim."
			};
			break;
	};
};

// click listener and behaviors
$(document).on('mousedown', '.button', function() {
	var guess = ($(this).text().toLowerCase());
	if ((quiz.answer[guess]) === true) {
		console.log("evaluated to true boolean")
			// correct answer behavior
		console.log("Current score is " + score);
		$(".overlay").fadeIn(1000);
		// write unique information into overlay
		console.log("about to switch the video, question flag is now " + questionFlag);
		switch (questionFlag) {
			case 1: //paul rand
				$('#explain').text(quizdata.explain);
				$('#explain-video').append(
					("<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/4yOjts0tpco\" frameborder=\"0\" allowfullscreen></iframe>")
				);
				break;
			case 2: //paula scher
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<img src=\"./images/citi-napkin.jpg\" />")
				);
				break;
			case 3: //death star
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<iframe width=\"420\" height=\"236\" src=\"https://www.youtube.com/embed/DOFgFAcGHQc\" frameborder=\"0\" allowfullscreen></iframe>")
				);
				break;
			case 4: //moma logo
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<img src=\"./images/moma-logo.jpg\" />")
				);
				break;
			case 5: //moma logo
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<iframe width=\"420\" height=\"236\" src=\"https://www.youtube.com/embed/Ckz2uP8VmIE\" frameborder=\"0\" allowfullscreen></iframe>")
				);
				break;

		};
		score = (score + 1);
		questionFlag = (questionFlag + 1);
	} else {
		console.log("false")
			// wrong answer behavior
		showError();
	}
});


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
	$('#content').empty(); //stop Youtube from playing beyond exit
	$('#explain-video').empty();
});



// *** to do list
//
// add response info after correct answer
// tally score at the end behavior incl accuracy



//