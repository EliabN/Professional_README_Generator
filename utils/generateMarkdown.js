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

  return `#  
# ${finalTitleString}
## Description

${questions.description}

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

${questions.tableContent}

## Installation

${questions.installation}

## Usage

${questions.usage}

## Credits

${questions.credits}

## License

${questions.license}

---

## Badges

${questions.badges}

## Features

${questions.features}

## How to Contribute

${questions.contribute}

## Tests

${questions.test}

## Contact

Email: ${questions.email}
`;}


// Function to convert a string to title case
function toTitleCase(str) {
  // Use a regular expression to match each word
  return str.replace(/\w\S*/g, (txt) =>
    // Capitalize the first letter of the word and rest lowercase
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}


module.exports = generateMarkdown;
