// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
/*
0 title
1 description
2 installation instruction
3 usage information
4 contribution guidelines
5 test instructions
6 liscence 
7 git hub username
8 email address
*/

const questions = ["What is your project title?",
"Provide a short description explaining the what, why, and how of your project \n Use the following questions as a guide: \n What was your motivation? \n Why did you build this project? /n What problem does it solve? \n What did you learn?",
"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
"For application usage, provide instructions and examples for use.",
"What are your contribution guidelines? \n If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. \n https://www.contributor-covenant.org/ is an industry standard, but you can always write your own if you'd prefer.",
"Go the extra mile and write down test instructions for your application.",
"Please choose a liscense from the following options, Enter a number between 1-7 \n 1. GNU AGPLv3 \n 2. GNU GPLv3 \n 3. Mozilla Public License 2.0 \n 4. Apache License 2.0 \n 5. MIT License \n 6. Boost Software License 1.0 \n 7. The Unlicense \n For more infor see this link https://choosealicense.com/licenses/",
"Enter your Github Username",
"Enter your email address"];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), 
    (err) => err ? console.log(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'title',
      },
      {
          type: 'input',
          message: questions[1],
          name: 'description',
        },
        {
          type: 'input',
          message: questions[2],
          name: 'installation',
        },
        {
          type: 'input',
          message: questions[3],
          name: 'usage',
        },
        {
          type: 'input',
          message: questions[4],
          name: 'contribution',
        },
        {
          type: 'input',
          message: questions[5],
          name: 'tests',
        },
        {
          type: 'input',
          message: questions[6],
          name: 'license',
        },
        {
          type: 'input',
          message: questions[7],
          name: 'github',
        },
        {
          type: 'input',
          message: questions[8],
          name: 'email',
        }
     
    ])
    .then((response) =>
      writeToFile(`README.md`, response));
  
}

// Function call to initialize app
init();

