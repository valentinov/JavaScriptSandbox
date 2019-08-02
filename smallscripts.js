console.log('It works!');

//--
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for(var i = 0; i<this.answers.length; i++){
        console.log(i + ': ' + this.answers[i]);
    }
}

var k1 = new Question('When did WW II end?', [1939,1943,1944,1945],3);

var k2 = new Question('The European Union has how many member countries', [19,23,24,26,27,28],5);

var k3 = new Question('What was the first PC called?', ['MITS Altair 8800', 'IMSAI 8080', 'Apple 2', 'Compaq Portable'], 0);

var questions = [k1,k2,k3];

var rnd = Math.floor(Math.random()*questions.length);

questions[rnd].displayQuestion();