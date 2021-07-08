function Quiz(questions) 
{
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () 
{
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) 
{
  if (this.getQuestionIndex().isCorrectAnswer(answer)) 
  {
    this.score++;
  }

  this.questionIndex++;
};

Quiz.prototype.isEnded = function () 
{
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer)
{
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) 
{
  return this.answer === choice;
};

function populate() 
{
  if (quiz.isEnded()) 
  {
    showScores();
  } 
  else 
  {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) 
    {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) 
{
  var button = document.getElementById(id);
  button.onclick = function () 
  {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() 
{
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores()
{
  var gameOverHTML = "<h1 id='result'>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

// create questions here
var questions = [
  new Question(
    "India's only Naval Aviation Museum is located in _____",
    ["Goa", "Kerala", "Karnataka", "Tamil Nadu"],
    "Goa"
  ),
  new Question(
    "What was the basis of the reorganization of states in India in the year 1956?",
    ["Religion", "Caste", "Language", "None of these"],
    "Language"
  ),
  new Question(
    "India became the member of United Nation in the year?",
    ["1944", "1945", "1947", "1952"],
    "1945"
  ),
  new Question(
    " Lakshadweep is a group of how many islands",
    ["22", "26", "32", "36"],
    "36"
  ),
  new Question(
    "With how many countries India share its land borders",
    ["5", "6", "7", "8"],
    "6"
  ),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
