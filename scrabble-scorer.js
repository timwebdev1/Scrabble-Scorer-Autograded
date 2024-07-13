// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   info = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
   console.log(oldScrabbleScorer(info));
   return;
};

let newPointStructure;

let simpleScorer = function (word) {
   word = word.toUpperCase();
   let letterPoints = 0;

   for (let i = 0; i < word.length; i++) {
      letterPoints += 1;
   }
   return letterPoints;
};

let vowelBonusScorer = function (word) {
   word = word.toUpperCase();
   const consonantLetters = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
   const vowelLetters = ['A', 'E', 'I', 'O', 'U'];
   let letterPoints = 0;

   for (let i = 0; i < word.length; i++) {

      if (vowelLetters.includes(word[i])) {
         letterPoints += 3;
      } else if (consonantLetters.includes(word[i])) {
         letterPoints += 1;
      }
   }
   return letterPoints;
};

let scrabbleScorer;

const scoringAlgorithms = [
   {
      "name": "Simple Score",
      "description": "Each letter is worth 1 point.",
      "score function": "A function with a parameter for user input that returns a score."
   },
   {
      "name": "Bonus Vowels",
      "description": "Vowels are 3 pts, consonants are 1 pt.", "score function": "A function that returns a score based on the number of vowels and consonants."
   },
   {
      "name": "Scrabble",
      "description": "The traditional scoring algorithm.",
      "score function": "Uses the oldScrabbleScorer() function to determine the score for a given word."
   }
];

function scorerPrompt() { }

function transform() { };

function runProgram() {
   initialPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
