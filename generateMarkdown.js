// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description.
  ${data.description}

  ## Table of Contents.

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributing)

  ## Installation.
  
  ${data.installation}
  
  ## Usage.

  ${data.usage}

  ## License.
  
  ${data.license}

  ## Contributing.

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions.

  "We have sent you instractions to your email " ${data.questions} " how to reach us!"


`;
}

module.exports = generateMarkdown;
