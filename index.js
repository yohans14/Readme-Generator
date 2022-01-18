// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const writeFile = require("./utils/generateMarkdown");
const pageTemplate = require("./src/page-template");
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Hello, There, whats is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email adress!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the name of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Provide the steps required to install your project (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log(
            "Please enter provide the steps required to install your project!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use(Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter instructions and examples for use!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "which license applies to your project (Check all that apply)",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "UNKNOWN"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide a guidelines for how to contribute (Required)",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log("Please enter a guidelines for how to contribute!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddTests",
      message: "Does your application include Tests?",
      when: ({ confirmAddTests }) => {
        if (confirmAddTests) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptUser()
  // .then(promptProject)
  .then((readmeData) => {
    return pageTemplate(readmeData);
  })
  .then((pageREADME) => {
    return writeFile(pageREADME);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return;
  })
  .catch((err) => {
    console.log(err);
  });
