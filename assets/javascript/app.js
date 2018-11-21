$("#start").on("click", function () {
    game.start();
})

$(document).on('click', '#end', function () {
    game.done();
})
// need an object with all of the questions and answers
var questions = [{
    question: "Woody and Buzz Lightyear are two of Andy’s toys. Who is the next door neighbor that Andy’s toys fear?",
    answers: ["Rex", "Sid", "Hamm", "George"],
    correctAnswer: "Sid"
}, {
    question: "In Goodfellas, what is Henry Hill’s job as a teenager that gets him involved with the mob?",
    answers: ["Delivering groceries", "Selling newspapers", "Picking up trash", "Parking cars"],
    correctAnswer: "Parking cars"
}, {
    question: "What type of beans does Hannibal Lecter like to enjoy with a nice chianti?",
    answers: ["Navy", "Fava", "Lima", "Kidney"],
    correctAnswer: "Fava"
}, {
    question: "What specific creature does Indiana Jones hate?",
    answers: ["Scorpions", "Snakes", "Spiders", "Cockroaches"],
    correctAnswer: "Snakes"
}, {
    question: "Part of Rocky’s training is punching the sides of frozen meat of what animal?",
    answers: ["Horse", "Cow", "Bison", "Pig"],
    correctAnswer: "Cow"
}, {
    question: "What type of candy does Elliott use to persuade E.T. to come into his room?",
    answers: ["DOTS", "Reese’s Pieces", "Skittles", "Sour Patch Kids"],
    correctAnswer: "Reese’s Pieces"
}, {
    question: "What is the meaning of the “wonderful” phrase, “Hakuna Matata?”",
    answers: ["No worries.", "Why even bother?", "Live and let live.", "Eat, drink, and be merry."],
    correctAnswer: "No worries."
}, {
    question: "Which of Forrest Gump’s body parts was wounded, thereby sending him home from Vietnam?",
    answers: ["Pinkie", "Earlobe", "Big toe", "Buttock"],
    correctAnswer: "Buttock"
}, {
    question: "Which character did Danny Divito play in the movie Batman Returns?",
    answers: ["Batman", "Robin", "Commissioner Gordon", "Penguin"],
    correctAnswer: "Penguin"
}, {
    question: "In the wizarding world of Harry Potter, what is the symbol for the house of Hufflepuff?",
    answers: ["Owl", "Horse", "Badger", "Eagle"],
    correctAnswer: "Badger"
}]

// still working on getting a unique identifier for each string of answers: [] so i can then change the style


var myJSON = JSON.stringify(questions);
    console.log(myJSON);

;


// var game
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's up!");
            game.done();
        }
    },

    //start and end functions
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#wrapper").prepend('<h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#wrapper").append("<h2>" + questions[i].question + "</h2>")
            for (var x = 0; x < questions[i].answers.length; x++) {
                var radioDiv = $("<div>")
                radioDiv.append("<input type= 'radio' ' name ='question-" + i + "' value='" + questions[i].answers[x] + '' + "'>")
                radioDiv.append("<label  class = 'radioAnswer'>" + questions[i].answers[x] + " </label>")

                $("#wrapper").append(radioDiv);
                // $("#wrapper").append("<input type= 'radio' class = 'radioAnswer' name ='question-" + i + "' value='" + questions[i].answers[x] + '' + "'>" + questions[i].answers[x])
                // console.log("test: " + Array.from[x])
                
            }
        }
        $("#wrapper").append('<br><br> <button id="end">DONE</button');
        
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
            
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;

            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#wrapper h2").remove();
        $("#wrapper").html("<h2>Game Over! </h2>");
        $("#wrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#wrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#wrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        document.getElementById("wrapper").style["textAlign"] = "center";
        document.getElementById("wrapper").style["fontSize"] = "25px";
    }
}
