//connect file with letter.js module
let Letter = require("./letter.js");

//Word Constructor to run various loops through the letters to verify if the guessed letter is correct
function Word(answer) {

  this.letterArray = [];

  for (let i = 0; i < answer.length; i++) {

    let letter = new Letter(answer[i]);
    this.letterArray.push(letter);

  };

  this.log = function() {

    gameTiles = "";

    for (let j = 0; j < this.letterArray.length; j++) {

      gameTiles += this.letterArray[j] + " ";

    };

    console.log(gameTiles + "\n___________________________\n$$$$$$$$$$$$$$$$$$$$$$$$$$$\n");

  };
  
  this.userGuess = function(input) {

    for (var k = 0; k < this.letterArray.length; k++) {

      this.letterArray[k].guess(input);

    };

  };

};
//Export module to be linked with other files
module.exports = Word;