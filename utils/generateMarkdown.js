// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Define a mapping of license types to their badge URLs
  const licenseBadgeUrls = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    'None': '',
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
function renderLicenseLink(license) {
  // Define a mapping of license and license links
  const licenseLinkUrls = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
    'GNU General Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'None': '',
  };
  // Check if the license type exists in the mapping
  if (licenseLinkUrls.hasOwnProperty(license)) {
    // If the license type exists, return the corresponding license URL
    return `[${license}](${licenseLinkUrls[license]})`;
  } else {
    // If the license type is not found, return an empty string
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = 'None') {
    return
  } else {
    // Call the renderLicenseLink function with the defined license type
    const licLink = renderLicenseLink(questions.license);

    return `## License

    This project license is under the ${licLink}`
  }
}


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


// Call the renderLicenseBadge function with the defined license type
const licBadge = renderLicenseBadge(questions.license);

// Call the renderLicenseLink function with the defined license type
const licLink = renderLicenseLink(questions.license);

// Call the renderLicenseLink function with the defined license type
const licSection = renderLicenseLink(questions.license);



return `# ${titleCaseTitle}

${licBadge}

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

This project license is under the ${licSection}

---

## Features

${senCaseFeatures}

## How to Contribute

${senCaseContribute}

## Tests

${senCaseTests}

## Contact
\`\`\`\`\`
If you have a question can reach via
Email: ${questions.email}
More of my work: [${questions.github}](https://github.com/${questions.github}/).
\`\`\`\`\``;}


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