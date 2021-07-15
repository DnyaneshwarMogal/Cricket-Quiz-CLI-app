let readlineSync = require('readline-sync');

console.log("  Let's find out how well you know me!!! 🧐  \n");

let userName= readlineSync.question(" 😄 Please enter your name :  \n");

console.log("\nHi "+userName+". Get ready for Level 1. 🤩\nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points.");

let score=0;

let question1={
  que: "Which national team are called “Baggy Greens”?\na.Pakistanr\nb.New Zealand\nc.Australia",
  ans: "c",
  description: "Correct answer is c.Australia"
};

let question2={
  que: "In which stadium did Virender Sehwag score his first triple century in 2004? \na.M. A. Chidambaram Stadium \nb.Multan Cricket Stadium \nc.Galle International Stadium ",
  ans: "b",
  description:"Correct answer is b.Multan Cricket Stadium."
};

let question3={
  que: "Who is the first batsman to cross 10000 runs in Tests?\na.Sachin Tendulkar \nb.Don Bradman \nc.Sunil Gavaskar",
  ans: "c",
  description:"Correct answer is c.Sunil Gavaskar."
};

let question4={
  que: "Which country won the inaugural ICC Champions Trophy in 1998?\na.Iron Man \nb.Batman \nc.Superman",
  ans: "b",
  description:"I love Batman!!."
};

let question5={
    que: "Which country won the inaugural ICC Champions Trophy in 1998?\na.Iron Man \nb.Batman \nc.Superman",
    ans: "b",
    description:"I love Batman!!."
  };


  let question6={
    que: "Who was the Man of the Series in 1992 World Cup?\na.Wasim Akram \nb.Lance Klusener \nc.Rahul Dravid",
    ans: "b",
    description:"Correct Ans is b.Lance Klusener"
  };


let question7={
    que: "Garware Pavilion End and Tata End are the two ends of which Indian cricket stadium?\na.Wankhede Stadium \nb.Green Park Stadium \nc.Eden Gardens",
    ans: "a",
    description:"Correct Ans is a.Wankhede Stadium"
  };

let question8={
  que: "Which country won the inaugural ICC Champions Trophy in 1998?\na.New Zealand \nb.South Africa \nc.Australia",
  ans: "b",
  description:"Correct Ans is b.South Africa"
};

let question9={
  que: "Who was declared the Man of the Series in the 2008 inaugural edition of IPL?\na.Shane Warne \nb.Shane Watson \nc.Shaun Marsh",
  ans: "a",
  description:"Correct Ans is a.Shane Warne"
};

let question10={
  que: "Where was Douglas Jardine, the captain of the England team in the famous Bodyline series, born?\na.Australia \nb.India \nc.England",
  ans: "b",
  description:"It's b.India"
};

//saving all questions in array
let questionSet1=[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];