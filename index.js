// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    }
]

// TODO: Create a function to initialize app
function init() {
    inquirer
    // Filter through questions
    .prompt(questions)
    .then((answers) => {
        // Store the new README content with user content
        const readmeFileContent = generateMarkdown(answers);

    // TODO: Create a function to write README file
    fs.writeFile('index.md', readmeFileContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.md!'));
});
}


// Function call to initialize app
init();