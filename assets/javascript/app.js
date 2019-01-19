//  console.log('linked');

$(document).ready(function(){

// my first lil question object!
// each object has a question, array of answer choices, and a correctAns
var quest1 = {
    question: "How many locations does the United States government officially recognize as haunted?",
    answers: ["0", "2", "430", "55"],
    correctAns: "2"
};

var quest2 = {
    question: "What is the name of the little girl whom haunts The Tavern in Austin, Texas?",
    answers: ["Sarah", "Sophie", "Maria", "Emily"],
    correctAns: "Emily"
}

// here is an array that will eventually hold all my questions and their answer choices
var arr = [quest1, quest2];

var inputBtn;
var label;
var ansChoice;
var intervalId;

//this starts the count for which question you are on as the first question in our list.
//it will be incremented once player presses submit or time runs out
var onQuestion = 0;

var time = 30;

//timer stuff
intervalId = setInterval(count, 1000);

//count function that counts down
function count(){
    time--;
    var timeRem = "Time Remaining: "+time+" seconds";
    $("#time-remain").text(timeRem);

    if (time == 0){
        alert("Out of time!");
        // clearInterval(intervalId);
        onQuestion++;
        displayQuestion(onQuestion);
        time = 30;
    }
}

// function that generates question and answer choices for each question
function displayQuestion(n){
    // display question on screen
    $("#question").text(arr[n].question);
    $("#answer-choices").text('');

    // for loop that creates the answer choices and thier buttons
    for (var a=0; a<arr[n].answers.length; a++){

        //creates a new radio button and label
        inputBtn = $("<input type='radio'>");
        label = $("<label>");

        //marks which choice is correct
        if (arr[n].answers[a] == arr[n].correctAns){
            inputBtn.attr('value', 'correct');
        } else {
            inputBtn.attr('value', 'incorrect');
        }

        //adds proper attributes to the buttons and labels
        inputBtn.attr('id', arr[n].answers[a]);
        inputBtn.attr('name', 'arr[n]');
        label.attr('for', arr[n].answers[a]);
        label.text(arr[n].answers[a]);

        // appends each choice to the answer choices div
        $("#answer-choices").append(inputBtn, label);

    }
}
displayQuestion(onQuestion);

//check answer function
function checkAnswer(){
    onQuestion++;
    time = 30;
    ansChoice = $("input:checked").val();
    console.log(ansChoice);

    if (ansChoice == "correct"){
        alert("you won!");
    } else {
        alert("better luck next time bitch");
    }
    displayQuestion(onQuestion);
}

//click function for the submit button
$("#submit").on("click", checkAnswer);

});