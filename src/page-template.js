// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const includeTest = (test) => {
  if (!test) {
    return "";
  }
  return ` This application include following test.
    ${test}`;
};
const renderLicenseBadge = (license) => {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

const renderLicenseLink = (license) => {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
};

const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `*License*\n The project is licensed by ${license}.`;
  }
  return "";
};

//export function to generate readme
module.exports = (readmeData) => {
  const { projects, ...userinfo } = readmeData;

  return `
    #${readmeData.title}

## Description 
    ${readmeData.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
    Instructions to be followed 
    ${readmeData.installation}

## Usage 
    ${readmeData.usage}

## License
    ${renderLicenseLink.license}
    ${renderLicenseSection.license}
    ${renderLicenseBadge}

## Contributing

    ${readmeData.contributing}
## Tests
    ${includeTest.test}
## Questions
    please don't hesitate to reach out to us if you have any questions.
        ${readmeData.name}
        ${"GitHub:" + " https://github.com/" + readmeData.github}
        ${"Email:" + " " + readmeData.email}
    `;
};
