// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license) {
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
let output = `
![License Badge](https://img.shields.io/badge/License-${data.license}-green.svg)

### GitHub Username: ${data.github}

### GitHub Email Address: ${data.email}

# ${data.title}

## Description
${data.description}

## Table of Contents
* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Website](#website)
* [Testing](#testing)`;

// regular expression
data.languages = data.languages.toString().replace(/[ ]*,[ ]*|[ ]+/g, '\n* ');
output += `
## Built With
* ${data.languages}

## Installation
- ${data.installation}

## Usage
${data.usage}

## Contributions
- ${data.contributing}

## Website
${data.website}

## Tests
- ${data.test}

## License
- ${data.license}

`;
return output;
}

module.exports = generateMarkdown;
