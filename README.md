# Constructor-Word-Game
Week 12 Homework Submission - Create command line word game using Node.js

This word guess game uses 3 modules, the first of which letter.js which allows each letter selected to be added to an object and then displayed correctly as the user chooses them (ie, as letter for correct guesses, or "_" for guesses not yet chosen correctly.  The "word" module uses multiple loops through the letter objects to check each letter object in the letter array and as the user guesses correctly, the game tiles change to actual letters.

Finally the "index" module contains primary java script logic code.  The Word bank and game theme I selected is major league baseball teams.  I loaded the NPM inquirer package to insert user prompts and messages to the users to make the game make sense to the end user as they select letters correctly, incorrectly, lose and win.  The index.js file contains our variables, primary word array, and a series of functions that take the game from beginning to end and then restart or exit based on the input from the game player.  

YouTube Demo of the App: https://youtu.be/6HoDnw5PLdI
