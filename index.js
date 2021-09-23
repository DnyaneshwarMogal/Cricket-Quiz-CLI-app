const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(
  chalk.black.bold.bgYellow("  Let's check your Cricket knowlage!! 🧐  \n")
);

const userName = readlineSync.question(
  chalk.red.bold(" 😄 Please enter your name : ")
);

console.log(
  chalk.red(
    "\nHi " +
      userName +
      ". Get ready for Level 1. 🤩\nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points."
  )
);

console.log("\n----------------------------------------------------------\n");

let score = 0;

const question1 = {
  que: "Which national team are called “Baggy Greens”?\na.Pakistanr\nb.New Zealand\nc.Australia",
  ans: "c",
  description: "Correct answer is c.Australia",
};

const question2 = {
  que: "In which stadium did Virender Sehwag score his first triple century in 2004? \na.M. A. Chidambaram Stadium \nb.Multan Cricket Stadium \nc.Galle International Stadium ",
  ans: "b",
  description: "Correct answer is b.Multan Cricket Stadium.",
};

const question3 = {
  que: "Who is the first batsman to cross 10000 runs in Tests?\na.Sachin Tendulkar \nb.Don Bradman \nc.Sunil Gavaskar",
  ans: "c",
  description: "Correct answer is c.Sunil Gavaskar.",
};

const question4 = {
  que: "Kapil Dev's memorable running catch to dismiss Sir Viv Richards in the 1983 World Cup final is known to all. Who was the bowler in that dismissal?\na.Mohinder Amarnath. \nb.Madan Lal \nc.Balwinder Sandhu",
  ans: "b",
  description: "Correct answer is b.Madan Lal",
};

const question5 = {
  que: "How many IPL hundreds has Chris Gayle scored?\na.4 \nb.5 \nc.6",
  ans: "c",
  description: "Correct answer is c.6.",
};

const question6 = {
  que: "Who was the Man of the Series in 1999 World Cup?\na.Wasim Akram \nb.Lance Klusener \nc.Rahul Dravid",
  ans: "b",
  description: "Correct Ans is b.Lance Klusener",
};

const question7 = {
  que: "Garware Pavilion End and Tata End are the two ends of which Indian cricket stadium?\na.Wankhede Stadium \nb.Green Park Stadium \nc.Eden Gardens",
  ans: "a",
  description: "Correct Ans is a.Wankhede Stadium",
};

const question8 = {
  que: "Which country won the inaugural ICC Champions Trophy in 1998?\na.New Zealand \nb.South Africa \nc.Australia",
  ans: "b",
  description: "Correct Ans is b.South Africa",
};

const question9 = {
  que: "Who was declared the Man of the Series in the 2008 inaugural edition of IPL?\na.Shane Warne \nb.Shane Watson \nc.Shaun Marsh",
  ans: "b",
  description: "Correct Ans is b.Shane Watson",
};

const question10 = {
  que: "Where was Douglas Jardine, the captain of the England team in the famous Bodyline series, born?\na.Australia \nb.India \nc.England",
  ans: "b",
  description: "It's b.India",
};

//saving all questions in array
const questionSet = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];

//posting quiz and validating answers

for (let i = 0; i < questionSet.length; i++) {
  if (i === 3) {
    if (score >= 4) {
      console.log("Congratulations! You have entered Level 2 🤩");
    } else {
      console.log("Aww! you failed level 1");
      break;
    }
  }
  if (i === 6) {
    if (score >= 8) {
      console.log(
        "Congratulations! You have entered Final Level 🤩. Get ready for the toughest questions."
      );
    } else {
      console.log("Aww! you failed level 2");
      break;
    }
  }
  checkScore(
    i + 1,
    questionSet[i].que,
    questionSet[i].ans,
    questionSet[i].description
  );
}

//Printing final score
console.log("Yay! Your Final Score is " + score);

//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns, description) {
  const userAns = readlineSync.keyIn(
    chalk.cyanBright("\n" + queNo + ") " + checkQue + "\n"),
    { limit: "$<a-c>" }
  );
  if (userAns === checkAns) {
    console.log(chalk.green("You are absolutely right. You get 2 points 🎉"));
    score += 2;
  } else {
    console.log(chalk.redBright(`You are wrong.\n${description}`));
  }
  console.log(chalk.yellowBright("Your current score is " + score));
  console.log("\n----------------------------------------------------------\n");
}
