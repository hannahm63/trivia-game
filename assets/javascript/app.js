$(document).ready(function () {

    // array of q&a objects
    let qAndA = [{
        q: "What color is the sky?",
        a: "blue",
        choices: ["red", "blue", "green", "yellow"]
    },
    {
        q: "Which of these is an example of a palindrome?",
        a: "racecar",
        choices: ["racecar", "crystal", "pebble", "xylophone"]
    },
    {
        q: "Birds are most closely related to which of these?",
        a: "reptiles",
        choices: ["reptiles", "invertebrates", "rodents", "canines"]
    }];

    // div where start button and answer choices will be displayed
    let inputRow = $("#input");
    let questionCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    var displayMessage;
    var intervalId;

    console.log(`question displayed ${qAndA[0].q}`);

    function startScreen() {
        // add start btn to row 3 with message 
        let btnStart = $("<button>")
            .addClass("btn btn-outline-success btn-lg btn-block")
            .text("Start");

        inputRow.append(btnStart);

        // when start btn is clicked
        btnStart.on("click", function () {
            console.log("clicked!");

            // start btn and message are removed
            btnStart.remove();

            // questions are displayed
            displayQuestions(questionCount);

        });
    };

    function displayQuestions(questionCount) {
        console.log(`display questions method was called`);
        console.log(`question count: ${questionCount}`);
        let choicesArr = qAndA[questionCount].choices;
        inputRow.empty();

        // replace <p> text with question to row 2
        $("#message").text(qAndA[questionCount].q);

        // create answer div & fill answer div with each answer choice
        for (let i = 0; i < choicesArr.length; i++) {
            let answers = $("<label>")
                .text(choicesArr[i]);
            answers.prepend($(`<input type="radio" name="answerChoices" class="answerChoices" data-answer="${choicesArr[i]}">`));

            // append answer choices to row 3
            inputRow.append(answers);
        };

        questionTimer();

    };

    // define timer for questions
    function questionTimer() {
        var timeLeft = 10;
        intervalId = setInterval(decrement, 1000);
        // append timer to row 4  
        $("#row4").html(`<p>${timeLeft} seconds</p>`);

        // start 10 second count down
        function decrement() {
            timeLeft--;
            $("#row4").html(`<p>${timeLeft} seconds</p>`);
            // if time runs out, display time's up page
            if (timeLeft === 0) {
                stopTimer();
                outOfTime();
            }
        }

    };

    function stopTimer() {
        clearInterval(intervalId);
    }

    // correct answer fxn
    function correctAnswer() {
        correctCount++;
        console.log(`correct answer method called`);
        // remove timer from display
        $("#row4").empty();
        // row 2 text shows correct
        $("#message").text(`You are correct!`)
        // row 3 displays correct answer
        $("#input").text(`The correct answer is ${qAndA[questionCount].a}.`)
        // row 4 displays image
        // 5 second timer
        displayMessage = setTimeout(nextQuestion, 2000);
    };

    // incorrect answer fxn
    function incorrectAnswer() {
        incorrectCount++;
        console.log(`incorrect answer method called`);
        // remove timer from display
        $("#row4").empty();
        // row 2 text shows correct
        $("#message").text(`Sorry! That was not correct...`);
        // row 3 displays correct answer
        $("#input").text(`The correct answer is ${qAndA[questionCount].a}.`);
        // row 4 displays image
        // 5 second timer
        displayMessage = setTimeout(nextQuestion, 2000);
    };

    // time's up fxn
    function outOfTime() {
        incorrectCount++;
        console.log(`out of time method called`);
        // remove timer from display
        $("#row4").empty();
        // row 2 text shows time is up
        $("#message").text(`You ran out of time for this question!`);
        // row 3 displays correct answer
        $("#input").text(`The correct answer is ${qAndA[questionCount].a}.`);
        displayMessage = setTimeout(nextQuestion, 2000);
    };

    function nextQuestion() {
        console.log(`nextQuestion method called`);
        clearTimeout(displayMessage);
        questionCount++;
        if (questionCount < qAndA.length) {
            displayQuestions(questionCount);
        } else {
            gameOver();
        }
    }

    // once all questions have been answered
    function gameOver() {
        console.log(`gameover method called`);
        // row 2 displays game over message
        $("#message").text(`You have completed the quiz! Here are your results...`);
        // row 3 displays correct and incorrect answer counts
        inputRow.empty();
        inputRow.html(`<p>You answered ${correctCount} questions correctly and ${incorrectCount} incorrectly!`);
        // row 4 displays try again button - onclick calls tryAgain()
        let btnTryAgain = $("<button>")
            .addClass("btn btn-outline-success btn-lg btn-block")
            .attr('id', 'tryAgain')
            .text("Try Again");

        inputRow.append(btnTryAgain);

        $("body").on("click", "#tryAgain", function () {
            tryAgain();
        });

    };

    // restart fxn
    function tryAgain() {
        console.log(`restart method called`);
        // resets counts to 0
        questionCount = 0;
        correctCount = 0;
        incorrectCount = 0;
        // removes each element
        inputRow.empty();
        $("#message").empty();
        $("#row4").empty();
        // starts quiz
        displayQuestions(questionCount);
    };

    startScreen();

    // when any answer (class) is clicked 
    $("body").on("click", ".answerChoices", function () {
        let selectedRadio = $(this).attr("data-answer");
        console.log(`selected radio: ${selectedRadio}`);
        stopTimer();

        // if correct answer, display correct page otherwise display incorrect page
        if (selectedRadio === qAndA[questionCount].a) {
            console.log(correctCount);
            correctAnswer();
        } else {
            console.log(incorrectCount);
            incorrectAnswer();
        }
    });

});
