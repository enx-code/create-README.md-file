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
`;
}

module.exports = generateMarkdown;
