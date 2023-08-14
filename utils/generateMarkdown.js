// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Define a mapping of license types to their corresponding badge URLs
  const licenseBadgeUrls = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    'None': '',
    // Add more license types and badge URLs as needed
  };
  // Check if the license type exists in the mapping
  if (licenseBadgeUrls.hasOwnProperty(license)) {
    // If the license type exists, return the corresponding badge URL
    return `![License](${licenseBadgeUrls[license]})`;
  } else {
    // If the license type is not found, return an empty string
    return '';
  }
}


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


// Define the license type
//const licenseType = 'MIT';

// Call the renderLicenseBadge function with the defined license type
const badge = renderLicenseBadge(questions.license);

// Print the badge
console.log(badge);

  return `# ${titleCaseTitle}

${badge}

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

## Features

${senCaseFeatures}

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
