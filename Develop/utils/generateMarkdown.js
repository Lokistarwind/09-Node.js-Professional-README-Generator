
//an array of liscenses that is used for the project
const licenses = 
    ["GNU AGPLv3", 
    "GNU GPLv3", 
    "Mozilla Public License 2.0",
    "Apache License 2.0",
    "MIT License",
    "Boost Software License 1.0",
    "The Unlicense"
];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license == "GNU AGPLv3")
  {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
  }
  if(license == "GNU GPLv3")
  {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";

  }
  if(license == "Mozilla Public License 2.0")
  {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";

  }
  if(license == "Apache License 2.0")
  {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";

  }
  if(license == "MIT License")
  {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  if(license == "Boost Software License 1.0")
  {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
  }
  else{
    return "";
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license == "GNU AGPLv3")
  {
    return "https://www.gnu.org/licenses/agpl-3.0";
  }
  if(license == "GNU GPLv3")
  {
    return "https://www.gnu.org/licenses/gpl-3.0";

  }
  if(license == "Mozilla Public License 2.0")
  {
    return "https://opensource.org/licenses/MPL-2.0";

  }
  if(license == "Apache License 2.0")
  {
    return "https://opensource.org/licenses/Apache-2.0";

  }
  if(license == "MIT License")
  {
    return "https://opensource.org/licenses/MIT";
  }
  if(license == "Boost Software License 1.0")
  {
    return "https://www.boost.org/LICENSE_1_0.txt";
  }
  else{
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "The Unlicense")
  {
    return ``;
  }
  return `Distributed under the ${license}. See ${renderLicenseLink(license)} for more information.`;
}

//checks for liscence input. If its not one of the options then defaults to The Unlicense
function checklicense(data) {
  
    if(Number.isInteger(parseInt(data.license)))
    {
      if(parseInt(data.license) > 0 && parseInt(data.license) < 7)
      {
        return true;
      }
    }
    else{
      return false;
    }
  
}
// TODO: Create a function to generate markdown for README
//Note: Since data.license is a number input, it refers to the licenses array index -1
function generateMarkdown(data) {
  if(!checklicense(data))
  {
    data.license = 7;
  }

  return `# ${data.title}
  ${renderLicenseBadge(licenses[parseInt(data.license)-1])}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [License](#license)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(licenses[parseInt(data.license)-1])}

  ## Questions
  For more information go to https://github.com/${data.github} or email at ${data.email} 
`;
}

module.exports = generateMarkdown;
