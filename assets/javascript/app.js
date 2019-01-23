//  console.log('linked');

$(document).ready(function(){

// my first lil question object!
// each object has a question, array of answer choices, and a correctAns
var quest1 = {
    question: "What kind of cat do I have?",
    answers: ["Tiger", "Maine coon", "Calico", "Tabby"],
    correctAns: "Calico", 
    gif: "https://media.giphy.com/media/10JeYbrv6DrU08/giphy.gif",
    funFact: "Her name is Kitten and she is the most beautiful creature in the world."
};
var quest2 = {
    question: "Which popular 90s cartoon featured a cat and a dog attached at the waist?",
    answers: ["Hey Arnold", "Spongebob Squarepants", "Doug", "CatDog"],
    correctAns: "CatDog",
    gif: "https://media.giphy.com/media/tQ1rgHV3PYg0g/giphy.gif",
    funFact: "The first episode aired on April 4, 1998"
};
var quest3 = {
    question: "How many breeds of domestic cats are there?",
    answers: ["497", "58", "123", "11"],
    correctAns: "58",
    gif: "https://media.giphy.com/media/5r5J4JD9miis/giphy.gif",
    funFact: "Due to inconsistencies in breed classifications, this number varies from 43 (Federation Internationale Feline) to 58 (The International Cat Association)"
}

var quest4 = {
    question: "Where were cats first domesticated?",
    answers: ["United States", "Egypt", "Japan", "Spain"],
    correctAns: "Egypt",
    gif: "https://media.giphy.com/media/6jvSpFkhlZkoo/giphy.gif",
    funFact: "Though evidence now shows cats may have been domesticated in Mesopotamia as much as 8000 years earlier!"
}

var quest5 = {
    question: "What was Sabrina the Teenage Witch's cat's name?",
    answers: ["Salem", "Agnes", "Minerva", "Kitten"],
    correctAns: "Salem",
    gif: "https://media.giphy.com/media/M7EQSsEXkGRvq/giphy.gif",
    funFact: "The Witch's Council turned him into a cat as punishment for trying to take over the world"
}

var quest6 = {
    question: "Which large cat is often referred to as 'King of the Jungle'?",
    answers: ["Lion", "Tiger", "Puma", "Jaguar"],
    correctAns: "Lion",
    gif: "https://media.giphy.com/media/mhDwIpbsgGKk/giphy.gif",
    funFact: "Lions literally don't live in the jungle naturally and they are still the King!"
}
var quest7 = {
    question: "How much did Beau Nugget weigh (in pounds) when he made his television debut on Animal Planet's 'My Big Fat Pet Makeover'?",
    answers: ["23.5", "13.5", "31.5", "19"],
    correctAns: "23.5",
    gif: "https://thumbs.gfycat.com/FatFarawayBinturong-size_restricted.gif",
    funFact: "Check him out in their 3rd episode!"
}
var quest8 = {
    question: "What is Ellen's cat named?",
    answers: ["Charlie", "George", "Chairman", "All are correct"],
    correctAns: "All are correct",
    gif: "https://media.giphy.com/media/wxw2e19ZMsjio/giphy.gif",
    funFact: "She has three beautiful angels! (and some dogs too...)"
}
var quest9 = {
    question: "How many legs does my best friend Sophie's cat have?",
    answers: ["1","2","3","4"],
    correctAns: "3",
    gif: "https://media.giphy.com/media/6DyNiFYhOPsje/giphy.gif",
    funFact: "He just broke one of his good legs this week too..."
}
var quest10 = {
    question: "Which day of the week was Garfield's least favorite?",
    answers: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctAns: "Monday",
    gif: "https://media.giphy.com/media/8YWmjuxfadur6fzcy3/giphy.gif",
    funFact: "His favorite dish was lasagna!"
}
// here is an array that will eventually hold all my questions and their answer choices
var arr = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];

var inputBtn;
var label;
var ansChoice;
var intervalId;
var ansRight = 0;
var ansWrong = 0;
var unanswered = 0;

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
        ansChoice = $("input:checked").val();
        if (typeof ansChoice === "undefined"){
            unanswered++
            // clearInterval(intervalId);
            onQuestion++;
            time = 30;
            timeUpScreen(onQuestion);
        } else {
            checkAnswer();
        }
    }
}

//this generates the screen that shows if time runs out and the user hasn't clicked submit 
//it just has a lil message saying time is up and a tik tok cat
function timeUpScreen(n){

    $("#title").text("TIME IS UP");
    $("#question").html("<img src='https://media.giphy.com/media/xTiTnDYmY4GPT2AB2g/giphy.gif' height='200px'>");
    $("#answer-choices").text("The correct answer was: "+arr[n-1].correctAns);

    $("#submit").hide();
    $("#time-remain").hide()

    setTimeout(function(){
        displayQuestion(onQuestion);}, 
        5000);
}

// function that generates question and answer choices for each question
function displayQuestion(n){
    console.log("correct: "+ansRight);
    console.log("incorrect: "+ansWrong);
    console.log("unanswered: "+unanswered);

    // display question on screen
    time = 30;
    $("#title").text("Meow I ask you a question?");
    $("#question").text(arr[n].question);
    $("#answer-choices").text('');
    $("#submit").show();
    $("#time-remain").show();
    $("#try-again").hide();

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
        $("#voltaic_holder").css({"position":"relative", "top":"-75px"});

        inputBtn.attr('id', arr[n].answers[a]);
        inputBtn.attr('name', 'arr[n]');
        inputBtn.css({"margin-left":"25px"});
        label.attr('for', arr[n].answers[a]);
        label.text(arr[n].answers[a]);
        label.css({"margin-right":"25px"});

        // appends each choice to the answer choices div
        $("#answer-choices").append(inputBtn, label);

    }
}
displayQuestion(onQuestion);

//check answer function
function checkAnswer(){
    onQuestion++;
    console.log("now on question "+onQuestion);
    console.log("number of questions: "+ arr.length);
    // time = 30;
    
        ansChoice = $("input:checked").val();
        console.log(ansChoice);
        // clearInterval(intervalId);

        if (ansChoice == "correct"){
            //update ansRight variablw
            ansRight++;
            correctAnsDisplay(onQuestion-1);
        } else {
            //update variable
            ansWrong++;
            incorrectAnsDisplay(onQuestion-1);
        }
    // displayQuestion(onQuestion);
}

function resetGame(){
    ansRight = ansWrong = unanswered = onQuestion = 0;
    time = 30;
    intervalId = setInterval(count, 1000);

    displayQuestion(onQuestion);
}

// these functions create the display shown between questions
// they show either correct or incorrect on top of the screen and a gif
// if correct there is a fun fact displayed below gif
function correctAnsDisplay(n){

    $("#title").text("CORRECT!!!");
    console.log(arr[n].gif);
    $("#question").html("<img src='"+arr[n].gif+"' height='200px'>");
    $("#answer-choices").text(arr[n].funFact);

    $("#submit").hide();
    $("#time-remain").hide()

    if (onQuestion < arr.length){
        setTimeout(function(){
            displayQuestion(onQuestion);}, 
            5000);
    } else {
        clearInterval(intervalId);
        setTimeout(displayEndScreen, 5000);
    }  
}
//if incorrrect, the correct answer is shown 
function incorrectAnsDisplay(n){
    $("#title").text("Better luck next time....");
    console.log(arr[n].gif);
    $("#question").html("<img src='"+arr[n].gif+"' height='200px'>");
    $("#answer-choices").text("The correct answer was: "+arr[n].correctAns);

    $("#submit").hide();
    $("#time-remain").hide()

    if (onQuestion < arr.length){
        setTimeout(function(){
            displayQuestion(onQuestion);}, 
            5000);
    } else {
        clearInterval(intervalId);
        setTimeout(displayEndScreen, 5000)
    }  
}

function displayEndScreen(){
    $("#title").text("Game over!!");
    $("#question").html("<p>Correct: "+ansRight+
                        "</p><p>Incorrect: "+ansWrong+
                        "</p><p>Unanswered: "+unanswered);
    $("#answer-choices").text("");

    $("#try-again").show();
    $("#submit").hide();
    $("#time-remain").hide()

    onQuestion = 1;

}

//click function for the submit button
$("#submit").on("click", checkAnswer);

//click function for reset button
$("#try-again").on("click", resetGame);

});

