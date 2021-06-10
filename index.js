// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const question = ["What is your project title?: ", 
"Enter your description: ", 
// "Enter your table of contents: ", 
"Enter your installation instructions: ", 
"Enter your usage information: ",
"Enter your contribution guidelines: ",
"Enter your test instructions: ",
"What is the license for the application: ",
"Enter your Github username: ",
"Enter your email: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err): console.log("File Generated"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: question[0],
                name: 'title',
            },
            {
                type: 'input',
                message: question[1],
                name: 'description',
            },
            {
                type: 'input',
                message: question[2],
                name: 'install',
            },
            {
                type: 'input',
                message: question[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: question[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: question[5],
                name: 'test',
            },
            {
                type: 'list',
                message: question[6],
                name: 'license',
                choices: ["None", "Apache-2.0", "GPL", "MIT", "ISC"]
            },
            {
                type: 'input',
                message: question[7],
                name: 'github',
            },
            {
                type: 'input',
                message: question[8],
                name: 'email',
            },
        ])
        .then((response) => {
            console.log(response);
            writeToFile("README.md",generateMarkdown(response))
        })

}

// Function call to initialize app
init();
