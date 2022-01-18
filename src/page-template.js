//export function to generate readme

module.exports = (readmeData) => {
  const { projects, ...userinfo } = readmeData;

  return `
    **${readmeData.title}**

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

## Contributing
    ${readmeData.contributing}
## Tests

## Questions
    please don't hesitate to reach out to us if you have any questions.
        ${readmeData.name}
        ${"GitHub:" + " https://github.com/" + readmeData.github}
        ${"Email:" + " " + readmeData.email}
    `;
};
