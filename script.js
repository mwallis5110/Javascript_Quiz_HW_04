// Global Variables
var quizContainer = document.getElementsByClassName('quiz');
var startEl = document.getElementById('start');
var restartEl = document.getElementById(".restart");
var timerEl = document.getElementById('timer');  
var secondsLeft = 120;
var aa = document.getElementById('A');
var bb = document.getElementById('B');
var cc = document.getElementById('C');
var dd = document.getElementById('D');
var highScore = document.getElementById('highscore');
var correctAnswers = document.getElementById("correctAnswers").innerHTML = 0;
var scoreName = "";
var displayedScores = [];
var scoresList = document.getElementById('pastScores');


//Event Listener to display quiz, load question and start timer 
//(after clicking start button)
startEl.addEventListener('click', function (event) {
    event.preventDefault();
    restart.style.display="none";
    startEl.style.display="none";
    document.querySelectorAll('.quiz').forEach(a=>a.style.display = "block");
    loadQuestion();
    setTime(secondsLeft);
}); 

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

//for loop to cycle through questions
var questionArray = questions.length;
for (i = 0; i < questionArray; i++);

//Function to check correctness and subtract time (20 seconds) for wrong answers
document.getElementById("answers").addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.value !== questions [currentQuestion].correctAnswer) {
        secondsLeft -= 20;
    } else {
        correctAnswers += 1;
        console.log(correctAnswers); 
        document.getElementById("correctAnswers").innerHTML = correctAnswers;
    };

    //Checks quiz is on the last question or if time is up
    if (currentQuestion === 4) {
        clearInterval(secondsLeft);
        alert("Finished!");
        getScoreName();
    } else if (secondsLeft === 0) {
        clearInterval(secondsLeft);
        alert("Time is up!");
        getScoreName();
    } else {
        currentQuestion++;
        loadQuestion();
    };
});

function getScoreName() {
    scoreName = prompt("Please enter your name for our high scores list:");
    console.log(scoreName)
};



var finalScore = {
    name: scoreName, 
    score: correctAnswers,
};

console.log(finalScore)


localStorage.setItem("finalScore", JSON.stringify(finalScore));
    console.log(finalScore)


function showScores() {
    for (var i = 0; i < displayedScores.length; i++) {
        var score = scoresList[i];

        var li = document.createElement("li");
        li.setAttribute("data-index", i)
        li.textContent = score;
        scoresList.append(li);
    };
};

console.log(scoresList);

function init() {
    var displayedScores = localStorage.getItem("finalScore");
    console.log(displayedScores);
    if (displayedScores !== null) {
        scoresList = displayedScores;
        console.log(scoresList);
        console.log(displayedScores);
    };
    // storeScores();
    showScores();
};

init();