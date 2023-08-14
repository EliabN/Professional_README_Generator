// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

      - What was your motivation?
      - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
      - What problem does it solve?
      - What did you learn?:`,
    },
    {
      type: 'input',
      name: 'tableContent',
      message: `If your README is long, add a table of contents to make it easy for users to find what they need {Use syntax below to add bookmark}.

      - [Installation](#installation)
      - [Usage](#usage)
      - [Credits](#credits)
      - [License](#license)
      - [Badges](#badges)
      - [Features](#features)
      - [How to Contribute](#contribute)
      - [Tests](#tests)`
      ,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed. \n{To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ![alt text](assets/images/screenshot.png)}',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.',
    },
    {
      type: 'input',
      name: 'license',
      message: '🏆 With this last section marks the bare minimum of a high-quality README file, and your project will ultimately determine the content of this document. You might also want to consider adding the sections after this. \n\nThe last section is the license. This lets other developers know what they can and cannot do with your project; If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). You can pick from the following or provide your own here:',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Badges aren\'t necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you\'re doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.',
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here:',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'You can include guidelines for how to would like other developers to contribute to your application. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you\'d prefer here:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write tests for your application. Then provide examples on how to run them here:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email for contact section:',
    },
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