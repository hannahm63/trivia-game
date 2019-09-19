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

    console.log(qAndA[0].q);

    // add start btn to row 3 with message 
    let inputRow = $("#input");
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
        displayQuestions();

    });

    function displayQuestions() { 
        
        // replace <p> text with question to row 2

        
        // append answer choices to row 3
        // append timer to row 4  
        // start 15 second count down

    };

    // when any answer (class) is clicked 
    // if correct answer, display correct page
    // if incorrect answer, display incorrect page
    // if time runs out, display time's up page

    // correct answer fxn
    // row 2 text shows correct
    // row 3 displays correct answer
    // row 4 displays image
    // 5 second timer

    // incorrect answer fxn
    // row 2 text shows incorrect
    // row 3 displays correct answer
    // row 4 displays image
    // 5 second timer

    // time's up fxn
    // row 2 text shows time is up
    // row 3 displays correct answer
    // row 4 displays image
    // 5 second timer

    // once all questions have been answered
    // row 2 displays game over message
    // row 3 displays start button
    // row 4 displays correct and incorrect answer counts


});
