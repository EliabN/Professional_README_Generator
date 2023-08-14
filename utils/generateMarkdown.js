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
  const titleCaseString = toTitleCase(questions.title);
  // Replace spaces with hyphens in the title case string
  const finalTitleString = titleCaseString.replace(/\s+/g, '-');

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
  const senCaseTests = toSentenceCase(questions.test);

  return `#  
# ${finalTitleString}
## Description

${senCaseDescription}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Contact](#contact)

{questions.tableContent}

## Installation

{senCaseInstall}

## Usage

{senCaseUsage}

## Credits

{questions.credits}

## License

{questions.license}

---

## Badges

{questions.badges}

## Features

{senCaseFeatures}

## How to Contribute

{senCaseContribute}

## Tests

{senCaseTests}

## Contact

Email: {questions.email}
`;}


// Function to convert a string to title case
function toTitleCase(str) {
  // Use a regular expression to match each word
  return str.replace(/\w\S*/g, (txt) =>
    // Capitalize the first letter of the word and rest lowercase
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}


function toSentenceCase(str) {
  return str.replace(/(^\w{1}|\.\s*\w{1})/g, (match) => match.toUpperCase());
}

module.exports = generateMarkdown;
