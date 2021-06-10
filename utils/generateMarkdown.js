// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-9cf`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return "";
      break;
    
    case 'Apache-2.0':
      return "https://spdx.org/licenses/Apache-2.0.html"
      break;

    case 'GPL':
      return "https://spdx.org/licenses/GPL-3.0-or-later.html"
      break;
    
    case 'MIT':
      return "https://spdx.org/licenses/MIT.html"
      break;

    case 'ISC':
      return "https://spdx.org/licenses/ISC.html"
      break;

    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return `[${badge}](#${licenseLink})`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license)
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [License](#license)
  - [Contact me](#contact-me)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## License
  ${license}

  ## Contact me
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
