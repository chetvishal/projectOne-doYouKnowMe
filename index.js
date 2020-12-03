var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0; //variable storing score

console.log(chalk.green('lets see how well you know cvishal'));

var userName = readlineSync.question('Please enter your name: ');

//function to run questions
function play(question) {

  console.log(`\n` + question.question);
  console.log("Your options are:- ");

  //loop to loop through options of questions
  for (var i = 0; i < 4; i++) {
    console.log(`[${i + 1}].`, question.options[i])
  }

  var userAns = readlineSync.question(`Enter correct option: `);

  if (userAns < 5) {//to check valid option

    if (userAns === question.answer) {
      score = score + 1;
      console.log(chalk.green("Correct!"))
    }

    else {
      console.log(chalk.red("Wrong!"))
    }

  }
  else {
    console.log(chalk.red("Please enter valid options no!"))
  }
  console.log("Your score: " + chalk.green(score));
}

var questions = [
  {
    question: "whats vishal's birthday month?",
    options: ["february", "december", "april", "november"],
    answer: "1"
  },
  {
    question: "whats vishal's college name?",
    options: ["jims", "vips", "msit", "nsit"],
    answer: "1"
  },
  {
    question: "which mobie phone does vishal uses?",
    options: ["redmi", "apple", "samsung", "oppo"],
    answer: "1"
  },
  {
    question: "whats vishal's sister name?",
    options: ["isha", "meena", "vishakha", "garima"],
    answer: "2"
  },
  {
    question: "whats vishal gave his 12th board exams?",
    options: ["2016", "2019", "2017", "2018"],
    answer: "4"
  }
]

var otherPlayers = [
  {
    name: "daring bhai",
    score: 3
  },
  {
    name: "sallu bhai",
    score: 4
  }
]

for (var i = 0; i < questions.length; i++) {
  play(questions[i]);
}

otherPlayers.push({ name: userName, score: score });

console.log("\n********** SCORES OF OTHER PLAYERS **********")
for (var i = 0; i < otherPlayers.length; i++) {
  console.log('\nname:', otherPlayers[i].name);
  console.log('score:', chalk.green(otherPlayers[i].score));
}


