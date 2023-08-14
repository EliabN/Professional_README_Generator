// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
     {
      type: 'input',
      name: 'github',
      message: 'What is your project GitHub account?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: `Provide a short description explaining the what, why, and how of your project. \nUse the following questions as a guide:`,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step \ndescription of how to get the development environment running:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. \nInclude screenshots as needed. May using the following syntax: \n![Sample img](sample/sample-screenshot.png)}, otherwise enter N/A for now:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, third-party assets that require attribution, \nany extra information, with links to their GitHub profiles.\notherwise N/A:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'This is the license section. If you need help choosing a license, \nrefer to [https://choosealicense.com/](https://choosealicense.com/). \nYou can pick from the following or provide your own here:',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Badges aren\'t necessary, but if you require any;Check out the badges hosted by \n[shields.io](https://shields.io/). Otherwise enter N/A:',
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here:',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'You can include guidelines for how you would like other developers to contribute to your application. \nThe [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, \nbut you can always write your own otherwise N/A:',
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
    fs.writeFile('sample/sampleREADME.md', readmeFileContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.md!'));
});
}


// Function call to initialize app
init();