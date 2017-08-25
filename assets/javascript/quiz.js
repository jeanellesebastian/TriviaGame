// define variables ==========

var correct = 0;
	$("#correct").text(correct);

var incorrect = 0;
var unanswered = 0;

// quiz questions ==========

var questions = [{
	question: "What house is Harry Potter in?",
	answers: ["Gryffindor", "Slytherin", "Ravenclaw"],
	right: "Gryffindor"
	}, {

	question: "What is Voldemort's real name?",
	answers: ["Tom Joker", "Tom Riddle", "Tom Marvelous"],
	right: "Tom Riddle"
	}, {

	question: "What color owl is Hedwig?",
	answers: ["Purple", "Blue", "White"],
	right: "White"
	}];


// Display the button to start the trivia game

pageOne();

$("#startbutton").click(pageTwo);


function pageOne (){

    $(".results").hide();
    $("#endbutton").hide();
}

// To display the trivia game questions

function pageTwo (){

	$(".triviaGame").show();
    $(".start").hide();
    $("#endbutton").show();


    for (var i = 0; i < questions.length; i++) {
        $("#test").append("<div id=" + "question" + i + "></div>");
        $("#question" + i).append("<div> <p>" + "<br>" + questions[i].question + "</p></div>");
        // To append the loop of options
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#question" + i).append('<input type="radio" name=question' + i +
                ' value="' + questions[i].answers[j] + '">' +
                questions[i].answers[j] + "<br>")
        }
    }
}

// Display the button to submit user answers

$("#endbutton").click(pageThree);


// Display the results 

function pageThree (){

	$(".triviaGame").hide();
	$(".results").show();

	// check user guesses and add +1 to correct, incorrect, unanswered
	for (var i = 0; i < questions.length; i++) {
        
        // captures user answers
        var userGuess = $('input[name=question' + i + ']:checked', '.triviaGame').val();
    
    if (!(userGuess != undefined)) {
        unanswered++;
        console.log(unanswered);

    } else if (questions[i].right === userGuess) {
        correct++;
        console.log(correct);

    } else {
        incorrect++;
        console.log(incorrect);
    }}
    
// Display the scores from function pageThree

 	$("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);
}



 




