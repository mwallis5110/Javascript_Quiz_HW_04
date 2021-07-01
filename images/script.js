// GIVEN I am taking a code quiz

// Global Variables:
var quizContainer = document.getElementById('quiz');
var startEl = document.getElementById('start');
var restartEl = document.getElementById(".restart");
var timerEl = document.getElementById('timer');  
var secondsLeft = 120;
var ulEl = document.getElementById('ul');
var aa = document.getElementById('A');
var bb = document.getElementById('B');
var cc = document.getElementById('C');
var dd = document.getElementById('D');
var highScore = document.getElementById('highscore');
var results = document.getElementById('results');
var score = document.getElementById("score").innerHTML = 0; 

// WHEN I click the start button
    //Event Listener to load question and start timer

    startEl.addEventListener('click', function (event) {
        event.preventDefault();
        loadQuestion();
        setTime(secondsLeft);
    }); 

// THEN a timer starts and I am presented with a question
    //Timer
function setTime() { 
      // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
    
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        };
    
    }, 1000);
};
// WHEN I answer a question
    //Arrays for questions - One big array
    const questions = [
        {
            question: "Which two variables can a Boolean function return?",
            answers: ["Up/Down", "Right/Left", "True/False", "Cat/Dog"],
            correctAnswer: "C"
        }, 
        {
            question: "Which type of variable can be globally scoped?",
            answers: ["const", "var", "let", "event"],
            correctAnswer: "B"
        },
        {
            question: "Which of the following represents abstract equality?",
            answers: ["=", "==", "$", "!=="],
            correctAnswer: "B"
        },
        {
            question: "Style properties can be altered with Javascript via the ______ method.",
            answers: ["addEventListener", "sendMessage", "preventDefault", "setAttribute"],
            correctAnswer: "D"
        },
        {
            question: '2 + "2" = __',
            answers: ["22", "4", "7", "12"],
            correctAnswer: "A"
        }
    ];

    //Function to load next question
    var currentQuestion = 0;
    function loadQuestion () {
        var data = questions [currentQuestion];
        var Q = document.getElementById("questionSpot");
        Q.textContent = data.question;
        aa.textContent = data.answers[0];
        bb.textContent = data.answers[1];
        cc.textContent = data.answers[2];
        dd.textContent = data.answers[3];
    };
// THEN I am presented with another question
    //for loop to cycle through questions
var questionArray = questions.length;
for (i = 0; i < questionArray; i++);

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

//Function to check correctness
document.getElementById("answers").addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.value !== questions [currentQuestion].correctAnswer) {
        secondsLeft -= 20;
    } else {
        score += 1;
        console.log(score); 
        document.getElementById("score").innerHTML = score;
    };

//Checks whether it is the last question or not

    if (currentQuestion === 4) {
        clearInterval(quizContainer);
        alert("Finished!");
        scoreName = prompt("Please enter your name for our high scores list:");
    } else if (secondsLeft === 0) {
        clearInterval(quizContainer);
        alert("Time is up!");
        scoreName = prompt("Please enter your name for our high scores list:");
    } else {
        currentQuestion++;
        loadQuestion();
    };

    var finalScore = scoreName + ", " + score;
    console.log(finalScore);
    // FIX THIS -> localStorage.setItem("finalScore", JSON.stringify(finalScore)); 
});


// WHEN all questions are answered or the timer reaches 0 -DONE

// THEN the game is over
    // Trigger an event based off the timer running out - clearInterval - DONE

    // Would this be done within the timer code or separately? - Both
    //Functions to end quiz, populate next question, show high scores, etc

// WHEN the game is over

// THEN I can save my initials and my score
    //Local Storage, render high scores on bottom of page 

// var scoreNames = prompt("Please enter your name for our high scores list:").trim;



//FIX THIS:

// // //use .append to add names and score to HTML table

// var highestScores = function () {
//     if (finalScore < document.getElementById("3rd"));
//         finalScore.appendChild("3rd");
//     } else if (highScore > document.getElementById("3rdScore"));
//  )};
