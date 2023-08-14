// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {

  // Convert the original string to title case
  const titleCaseTitle = toTitleCase(questions.title);

  // Description user input to sentence case
  const senCaseDescription = toSentenceCase(questions.description);
  // Installation user input to sentence case
  const senCaseInstall = toSentenceCase(questions.installation);
  // Usage user input to sentence case
  const senCaseUsage = toSentenceCase(questions.usage);
  // Features user input to sentence case
  const senCaseFeatures = toSentenceCase(questions.features);
  // Contribute user input to sentence case
  const senCaseContribute = toSentenceCase(questions.contribute);
  // Tests user input to sentence case
  const senCaseTests = toSentenceCase(questions.tests);

  return `# ${titleCaseTitle}

{license}

## Description

${senCaseDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Contact](#contact)

## Installation

${senCaseInstall}

## Usage

${senCaseUsage}

## Credits

${questions.credits}

## License

${questions.license}

---

## Badges

${questions.badges}

## Features

{senCaseFeatures}

## How to Contribute

${senCaseContribute}

## Tests

${senCaseTests}

## Contact

If you have a question can reach via
Email: ${questions.email}
More of my work: [${questions.github}](https://github.com/${questions.github}/).`;}


// Function to convert a string to title case
function toTitleCase(string) {
  // Use a regular expression to match each word
  return string.replace(/\w\S*/g, (word) =>
    // Capitalize the first letter of the word and rest lowercase
    word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
}


function toSentenceCase(string) {
  return string.replace(/(^\w{1}|\.\s*\w{1})/g, (match) => match.toUpperCase());
}

module.exports = generateMarkdown;
