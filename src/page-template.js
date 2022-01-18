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
    return `(https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};
//function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== "none") {
    return `\n*(#license)\n`;
  }
  return "";
};
//function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `\n The project is licensed by ${license}.`;
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
    ${renderLicenseSection(readmeData.license)}
    ${renderLicenseBadge(readmeData.license)} 
    ${renderLicenseLink(readmeData.license)}

## Contributing
    ${readmeData.contributing}

## Tests
    ${generateTest(readmeData.test)}

## Questions
    please don't hesitate to reach out to us if you have any questions.
        ${readmeData.name}
        ${"GitHub: " + "https://github.com/" + readmeData.github}
        ${"Email: " + readmeData.email}
    `;
};
