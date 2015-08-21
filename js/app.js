function typeToggle() { // reset the animation on the text
	var e = document.getElementById("question")
	e.classList.remove("typing")
	e.offsetWidth = e.offsetWidth
	e.classList.add("typing");
}

// data for answers
quiz = {};
quiz.answer = {
	"paul rand": true
};



// listener for button click
$(document).on('mousedown', '.button-one', function() {
	var guess = this.text().toLowerCase();
	console.log(guess);
	if ((quiz.answer[guess]) === true) {
		console.log("evaluated to true boolean")
	}
});



$(document).on('mousedown', '.button-two', function() {

});

$(document).on('mousedown', '.button-three', function() {

});

$(document).on('mousedown', '.button-four', function() {

});



// practice swap the big image and other stuff using the object key values
function imageUseObject() {
	$('.big-photo').css('background-image', 'url(' + question01.image + ')');
	$('h1.question').text(question01.query);
	typeToggle(); // reset the animation on text
	$('div.button-one > p.button-text').text(question01.answer01);
	$('div.button-two > p.button-text').text(question01.answer02);
	$('div.button-three > p.button-text').text(question01.answer03);
	$('div.button-four > p.button-text').text(question01.answer04);
}



// define objects for quiz contents
var question01 = {
	number: "01",
	query: "She drew the logo for Citi on a napkin at lunch",
	answer: "Paula Scher",
	agency: "Pentagram",
	answer01: "April Greiman",
	answer02: "Lella Vignelli",
	answer03: "Paula Scher",
	answer04: "Yuko Takagi",
	image: "\"./images/paula.jpg\"",
}



score = 0 // start with no score

// pick a random number to later randomize question order
var myNumber = Math.floor((Math.random() * 20) + 1);



// *** control flow
// randomize question order
// ask question if new question
// evaluate input
// display feedback (modal?)
// flag question as stale
// save score
// ask fresh question at random by pulling from objects
// eval any questions left?
// tally up score
// feedback about score