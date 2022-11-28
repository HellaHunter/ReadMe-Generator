
function init() {
    
const inquirer = require('inquirer');
const fs = require('fs');
const create = require('./utils/generateMarkdown.js');
const path = require('path');


const questions = [
    "What is the title of your project?",
    "Please enter a description for your project:",
    "Are there any installation instructions for your project? If not, please just enter 'none'",
    "Please enter the usage instructions for your project:",
    "What are the contribution guidelines for this project?",
    "Please write tests, and instructions on how to use them, here for this project:",
    "Please select the appropriate license for your project from below:",
    "Please enter your Github username:",
    "Please enter your email:"
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project_title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'project_description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation_instructions',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage_instructions',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribution_guidelines',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'test_instructions',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense','NONE']
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        }
    ])
    .then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), create(response))
    });
}

// Function call to initialize app
init();

