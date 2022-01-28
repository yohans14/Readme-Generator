const generateTest = (testText) => {
  if (!testText) {
    return "";
  }
  return `
  This project include following test.
    ${testText}`;
};
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "none") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
};
//function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== "none") {
    return `[More Info](https://choosealicense.com/licenses/)`;
  }
  return "";
};
//function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `\n  The project is licensed under ${license}.`;
  }
  return "";
};

//export function to generate readme
module.exports = (readmeData) => {
  const { projects, ...userinfo } = readmeData;

  return `
# ${readmeData.title}

## Description 
    ${readmeData.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Snapshot](#snapshot)
* [License](#license)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
    Instructions for Installation:
    ${readmeData.installation}

## Usage 
    ${readmeData.usage}

## Snapshot
  ![alt text](assets/images/screenshot.png)
## License
    ${renderLicenseSection(readmeData.license)}

    ${renderLicenseBadge(readmeData.license)} 

    ${renderLicenseLink(readmeData.license)}

## Contributing
    ${readmeData.contributing}

## Tests
    ${generateTest(readmeData.test)}

## Questions
    Please don't hesitate to reach out to us if you have any questions.
      ${readmeData.name}
      ${"[GitHub]"("https://github.com/" + readmeData.github)}
      ${"[Email]" + readmeData.email}
    `;
};
