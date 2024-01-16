const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "table of content",
    message: "Table of contents:",
  },
  {
    type: "input",
    name: "installation",
    message: "What needs to be installed:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage of this app:",
  },
  {
    type: "input",
    name: "license",
    message: "Licenses covered:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributors on this project:",
  },
  {
    type: "input",
    name: "tests",
    message: "How to test?",
  },
  {
    type: "input",
    name: "questions",
    message: ""
  }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
      if (err) {
        console.error("Error writing MD file:", err);
      } else {
        console.log(`MD file "${fileName}" has been successfully generated.`);
      }
    });
}
// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const outputPath = path.join(__dirname, 'README.md');
            writeToFile(outputPath, answers);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt', error);
        });
}       

// function call to initialize program
init();
