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
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
