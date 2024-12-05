const licensetypes = ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licensetypes[0]) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === licensetypes[1]) {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === licensetypes[2]) {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === licensetypes[3]) {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licensetypes[0]) {
    return `[License: MIT](https://opensource.org/licenses/MIT)`
  } else if (license === licensetypes[1]) {
    return `[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licensetypes[2]) {
    return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === licensetypes[3]) {
    return `[License: BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return ''
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ''
  } else {
    return `## License
    ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Contributors](#contributors)
* [Tests](#tests)
${ data.license === "None" ? "" : "* [License](#license)" }
* [Questions](#questions)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Tests
${data.test}
${renderLicenseSection(data.license)}
## Questions
If you have questions you can reach me at the following.
GitHub: [${data.github}](https://wwww.github.com/${data.github})
Email: ${data.email}
`;
}

export default generateMarkdown;
