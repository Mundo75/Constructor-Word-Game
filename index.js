//file and node.js package connections
const Word = require("./word.js");
const inquirer = require("inquirer");

//Declare global variables
let correctGuesses = [];
let wrongGuesses = [];
let numberOfGuesses = 8;
let letterArray = "abcdefghijklmnopqrstuvwxyz";
let teamsArray = [

    "orioles",
    "diamondbacks",
    "red sox",
    "braves",
    "white sox",
    "cubs",
    "indians",
    "reds",
    "tigers",
    "rockies",
    "astros",
    "dodgers",
    "royals",
    "marlins",
    "angels",
    "brewers",
    "twins",
    "mets",
    "yankees",
    "phillies",
    "athletics",
    "pirates",
    "mariners",
    "padres",
    "rays",
    "giants",
    "rangers",
    "cardinals",
    "blue jays",
];

//Use math.random to select ramdom word for game from team array and pass to word constructor
let teamArrayIndex = Math.floor(Math.random() * teamsArray.length);
let randomWord = teamsArray[teamArrayIndex];

let gameWord = new Word(randomWord);
let chooseWord = false;

//initial function starts game and selects new random word if needed
function startGame() {

    if (chooseWord) {

    let teamArrayIndex = Math.floor(Math.random() * teamsArray.length);
    let randomWord = teamsArray[teamArrayIndex];

    // Passes random word through the Word constructor and test if letter is a correct guess

    gameWord = new Word(randomWord);
    chooseWord = false;

  };

  let wordArray = [];

  gameWord.letterArray.forEach(verify);
  
  //use inquirer package and ask for user input at each round

  if (wordArray.includes(false)) {

    inquirer

      .prompt([

        {

          type: "input",

          message: "Guess a letter between A-Z!",

          name: "userinput"

        }

      ])

      .then(function(input) {

        if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {

          console.log("\nTHAT'S NOT A LETTER STUPID!  TRY AGAIN\n");

          startGame();

        } else {

          if (wrongGuesses.includes(input.userinput) || correctGuesses.includes(input.userinput) || input.userinput === "") {

            console.log("\nYou Already Tried that One.  Guess Again!\n");

            startGame();

          } else {
                        
            let verifyArray = [];
            
            gameWord.userGuess(input.userinput);
            
            gameWord.letterArray.forEach(wordCheck);

            if (verifyArray.join("") === wordArray.join("")) {

              console.log("\nSWING AND A MISS!!\n");
              
              wrongGuesses.push(input.userinput);

              numberOfGuesses--;

            } else {

                console.log("\nYA GOT A PIECE OF THAT ONE!\n");

                correctGuesses.push(input.userinput);

            };
            
            gameWord.log();

            console.log("Pitches Left: " + numberOfGuesses + "\n");



            // Show letters guessed already and guesses left

            console.log("Letters Guessed: " + wrongGuesses.join(" ") + "\n");
            
            if (numberOfGuesses > 0) {

                startGame();

            } else {

                console.log("YER OUT!  CAUGHT YA LOOKING! YOU LOSE!\n");
                
                restartGame();

            };
            
            function wordCheck(key) {

              verifyArray.push(key.guessed);

            };

          };

        };

      });

  } else {

    console.log("HOME RUN! WINNER WINNER CHICKEN DINNER!\n");

    restartGame();

  };

  function verify(key) {

    wordArray.push(key.guessed);

  };

};

function restartGame() {

  inquirer

    .prompt([

      {

        type: "list",

        message: "What do you wanna to do now?: ",

        choices: ["BATTER UP", "Take yer ball and go home"],

        name: "restart"

      }

    ])

    .then(function(input) {

      if (input.restart === "BATTER UP") {

        chooseWord = true;
        correctGuesses = [];
        wrongGuesses = [];
        numberOfGuesses = 8;

        startGame();

      } else {

        return;

      };

    });

};
startGame();