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
    var outOfTimeMessage;

    console.log(`question displayed ${qAndA[0].q}`);
    console.log(`question count: ${questionCount}`);

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
        let choicesArr = qAndA[questionCount].choices;

        // replace <p> text with question to row 2
        $("#message").text(qAndA[questionCount].q);


        // create answer div & fill answer div with each answer choice
        for (let i = 0; i < choicesArr.length; i++) {
            let answers = $("<label>")
                .text(choicesArr[i]);
            answers.prepend($(`<input type="radio" data-answer=${choicesArr[i]}>`));

            // append answer choices to row 3
            inputRow.append(answers);
        };

        questionTimer();

    };

    // define timer for questions
    function questionTimer() {
        var timeLeft = 10;
        var intervalId = setInterval(decrement, 1000);
        // append timer to row 4  
        $("#row4").html(`<p>${timeLeft} seconds</p>`);

        // start 15 second count down
        function decrement() {
            timeLeft--;
            $("#row4").html(`<p>${timeLeft} seconds</p>`);
            // if time runs out, display time's up page
            if (timeLeft === 0) {
                stopTimer();
                outOfTime();
            }
        }

        function stopTimer() {
            clearInterval(intervalId);
        }
    };


    // correct answer fxn
    function correctAnswer() {
        // row 2 text shows correct
        // row 3 displays correct answer
        // row 4 displays image
        // 5 second timer
        // when timer === 0
        // questioncount++
        // displayquestion()
    };

    // incorrect answer fxn
    function incorrectAnswer() {
        // row 2 text shows incorrect
        // row 3 displays correct answer
        // row 4 displays image
        // 5 second timer
        // when timer === 0
        // questioncount++
        // displayquestion()
    };

    // time's up fxn
    function outOfTime() {
        console.log(`out of time method called`);
        // row 2 text shows time is up
        // clearInterval(intervalId);
        $("#message").text(`You run out of time for this question!`)
        // row 3 displays correct answer
        $("#input").text(`The correct answer was ${qAndA[questionCount].a}.`)
        outOfTimeMessage = setTimeout(nextQuestion, 5000);
    };

    function nextQuestion() {
        clearTimeout(outOfTimeMessage);
        questionCount++;
        displayQuestions(questionCount);
    }

    // once all questions have been answered
    function gameOver() {
        // row 2 displays game over message
        // row 3 displays try again button - onclick calls restart()
        // row 4 displays correct and incorrect answer counts
    };

    // restart fxn
    function restart() {
        // resets question count to 0
        // removes each element
        // calls displayQuestions()
    };


    startScreen();

    // when any answer (class) is clicked 
    // if correct answer, display correct page
    // if incorrect answer, display incorrect page

});
