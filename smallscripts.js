console.log('It works!');

//--
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        }
        else {
            console.log('Wrong answer. Try again!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score );
        console.log('-----------------------');
    }

    var k1 = new Question('When did WW II end?', [1939, 1943, 1944, 1945], 3);

    var k2 = new Question('The European Union has how many member countries', [19, 23, 24, 26, 27, 28], 5);

    var k3 = new Question('What was the first PC called?', ['MITS Altair 8800', 'IMSAI 8080', 'Apple 2', 'Compaq Portable'], 0);

    function nextQuestion() {
        
    var questions = [k1, k2, k3];

    function score (){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    var rnd = Math.floor(Math.random() * questions.length);

    var rndQuestion = questions[rnd];

    rndQuestion.displayQuestion();

    var answer = prompt('Please select the correct answer!');

    if (answer !== 'exit') {
        rndQuestion.checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
    }

    nextQuestion();
})();