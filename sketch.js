var database;
var contestantCount, contestantCountRef;
var gameState = 0, contestantCount, database;
var quiz, question, contestant;

function setup() {
  createCanvas(850, 400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  question = new Question();

}


function draw() {
  background("pink");

  question.display();
}
