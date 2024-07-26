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
   let info = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
   // console.log(oldScrabbleScorer(info));
   return info;
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
      "scorerFunction": simpleScorer
   },
   {
      "name": "Vowel Bonus",
      "description": "Vowels are 3 points.",
      "scorerFunction": vowelBonusScorer
   },
   {
      "name": "Scrabble",
      "description": "Uses scabble point system.",
      "scorerFunction": oldScrabbleScorer
   }
];

function scorerPrompt() {
   let scorerOptions = "0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system";
   let scorerProgramIndex = input.question(`Which scoring algorithm would you like to use? \n\n${scorerOptions}\nEnter 0, 1, or 2: `);
   while (scorerProgramIndex < 0 || scorerProgramIndex > 2 || isNaN(scorerProgramIndex)) {
      scorerProgramIndex = input.question(`Please enter a number from 0-2. What scoring algorithym would you like to use? ${scorerOptions}`);
   }
   return scoringAlgorithms[scorerProgramIndex].scorerFunction;
};
// create an array with the scorer functions, from the user input, call the relavant algorithym and print the word and score

function transform() { };

function runProgram() {
   let wordInput = initialPrompt();
   let scorerFunction = scorerPrompt();
   let score = scorerFunction(wordInput);
   console.log(`Score for'${wordInput}': ${score}`);
}
// console.log("algorithym name: ", scoringAlgorithms[2].name);
// console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction('JavaScript'));

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
