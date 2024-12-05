// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questionList = [
    {
        type: "input",
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: 'description',
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: 'installation',
        message: "What are the installation instructions for your project?"
    },
    {
        type: "input",
        name: 'usage',
        message: "How would you like your project to be used?"
    },
    {
        type: "input",
        name: 'contributors',
        message: "Who are the contributors to your project?"
    },
    {
        type: "input",
        name: 'test',
        message: "What are the test instructions for your project?"
    },
    {
        type: "input",
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: "list",
        name: 'license',
        message: "What license would you like to use?",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created file!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questionList).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
