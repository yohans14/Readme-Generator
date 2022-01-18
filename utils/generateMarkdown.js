const fs = require("fs");

// TODO: Create a function to generate markdown for README

const writeFile = (readmeContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", readmeContent, (err) => {
      if (err) {
        reject(err);

        return;
      }
      resolve({
        ok: true,
        message: "README created please open dist folder!",
      });
    });
  });
};

module.exports = writeFile;
