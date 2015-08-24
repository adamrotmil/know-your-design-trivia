var score = 0 // start with no score
var questionFlag = 1 // which question are you on
var totalQuestions = 9 // how many questions in this quiz
var guessCount = 0 // how many guesses have you made
var myNumber = Math.floor((Math.random() * 12) + 1); // pick a random number

welcome = {};

$(document).ready(function() {
	console.log("ate a donut");
	$('#slide-two').fadeIn(10000);
	$('#slide-two').fadeOut(10000);
});


$(document).on('mousedown', '#start', function() {
	$('#welcome-wrap').fadeOut(1);
	$('.button-box').fadeIn(500);
	$('.button-box').toggleClass('make-block');
	$('#start').fadeOut(1);
	$('#intro').fadeOut(1);
});


$('#goodbye').fadeOut(1000); // keep hidden
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
				image: "./images/ibm.jpg",
				headline: "Who designed this visual identity for IBM?",
				choices: ["Paul Rand", "Jerry Kuyper", "Steven Heller", "Wolfgang Weingart"],
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
				headline: "Will the real Franklin Gothic please stand up?",
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
		case 6:
			quiz.answer = {
				"herbert matter": true
			};
			quizdata = {
				image: "./images/herbert-matter.jpg",
				headline: "Name the designer of these Swiss tourism posters",
				choices: ["Armin Hofmann", "Erik Speikermann", "Herbert Bayer", "Herbert Matter"],
				explain: "Herbert Matter was sent back to Zurich for lack of French immigration papers, and designed these posters using a photomontage technique."
			};
			break;
		case 7:
			quiz.answer = {
				"bob indiana": true
			};
			quizdata = {
				image: "./images/love-indiana.jpg",
				headline: "Which artist designed this sculpture?",
				choices: ["Milton Glasier", "Alexander Calder", "Bob Indiana", "Louise Fili"],
				explain: "Indiana designed this iconic wordplay, with its gently sloping O snuggling against the sturdy word \"LOVE.\""
			};
			break;
		case 8:
			quiz.answer = {
				"steve wozniak": true
			};
			quizdata = {
				image: "./images/woz.jpg",
				headline: "Who built the first Apple Computer?",
				choices: ["Steve Jobs", "Steve Wozniak", "Steve Engelbart", "Steve Eich"],
				explain: "In 1976, Wozniak and Steve Jobs founded Apple Computer with Wozniak's Apple I personal computer, later introducing his Apple II. \“Woz\” was awarded the National Medal of Technology by the President in 1985."
			};
			break;
		case 9:
			quiz.answer = {
				"susan kare": true
			};
			quizdata = {
				image: "./images/chicago.jpg",
				headline: "She designed the Chicago typeface and countless icons",
				choices: ["Ellen Lupton", "Susan Kare", "Carol Twombly", "Zuzana Licko"],
				explain: "Chicago, first called Elefont, was the first typeface developed for the Mac. Mac OS X excludes Chicago, but its core Thai fonts, Krungthep and Silom, resemble Chicago. Kare heads a digital design practice in San Francisco."
			};
			break;
	};
};

// click listener and behaviors
$(document).on('mousedown', '.button', function() {
	guessCount++;

	var guess = ($(this).text().toLowerCase());
	if ((quiz.answer[guess]) === true) {
		console.log("evaluated to true boolean")
			// correct answer behavior
		console.log("Current score is " + score);
		$("#modal").fadeIn(1000);
		$('#next').toggleClass("poof");
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
			case 5: //kodak
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<iframe width=\"420\" height=\"236\" src=\"https://www.youtube.com/embed/Ckz2uP8VmIE\" frameborder=\"0\" allowfullscreen></iframe>")
				);
				break;
			case 6: //herbert matter
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<iframe width=\"420\" height=\"236\" src=\"https://www.youtube.com/embed/0c2SGmRxr60\" frameborder=\"0\" allowfullscreen></iframe>")
				);
				break;
			case 7: //i love new york
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<img src=\"./images/eat-die.jpg\" />")
				);
				break;
			case 8: //woz
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<iframe width=\"420\" height=\"236\" src=\"https://www.youtube.com/embed/pJif4i9NRdI\" frameborder=\"0\" allowfullscreen></iframe>")
				);
				break;
			case 9: //susan kare
				$('#explain').text(quizdata.explain);
				$('#explain-video').empty();
				$('#explain-video').append(
					("<img src=\"./images/kare-out.jpg\" />")
				);
				break;

		};
		score++;
		questionFlag++;
	} else {
		console.log("false")
			// wrong answer behavior
		showError();
	}
});


$("a#next").click(function() {
	// go to next question behavior
	if (questionFlag <= totalQuestions) { //are we still asking questions
		$("#modal").fadeOut(1000);
		$(".big-photo").fadeIn(1000);
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
		// $('#content').empty(); //stop Youtube from playing beyond exit
		setTimeout(function() {
			$('#explain-video').empty();
		}, 700);

	} else {
		//goodbye
		console.log("goodbye")
		$("#modal").fadeOut(1000);
		$("#goodbye").fadeIn(1000);
		//$('#bye-text').text("You got " + score + " questions right in " + guessCount + " guesses!");
		var rating = Math.round(((score / guessCount) * 100));
		console.log("rating is now rounded to " + rating);
		$('#percent-feed').toggleClass('bounce');
		$('#percent-feed').text(rating);
		$('#percent-feed').append(
			$("<p id=\"lil\">%</p>")
		)
		$('#lil').toggleClass('lil'); //smaller percent symbol
		$('#bye-wrap').append(
			$("<p>You're a Junior Art Director!</p>")
		)
	}
});



$(document).on('mousedown', 'a#try-again.close', function() {
	console.log("fired the listener for try again button");
	score = 0 // start with no score
	questionFlag = 1 // which question are you on
	switchQuestion();
	$('.big-photo').css('background-image', 'url(' + quizdata.image + ')');
	$('h1.question').text(quizdata.headline);
	typeToggle() //reset headline animation
	$('#choice-one').text(quizdata.choices[0]);
	$('#choice-two').text(quizdata.choices[1]);
	$('#choice-three').text(quizdata.choices[2]);
	$('#choice-four').text(quizdata.choices[3]);
	$("#goodbye").fadeOut(1000);
	setTimeout(function() {
		$('#explain-video').empty();
		$("#bye-wrap > p").empty();
	}, 700);
});


// to do list
//
// enhance exit screen
// add intro screen
//
//