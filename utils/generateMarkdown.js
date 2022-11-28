// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    const licenseChosen = data.license;
    let licenseSelection = ' '
    if (licenseChosen === 'GNU AGPLv3') {
        licenseSelection = `[![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    };
    if (licenseChosen === 'GNU GPLv3') {
        licenseSelection = `[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
    if (licenseChosen === 'GNU LGPLv3') {
        licenseSelection = `[![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    };
    if (licenseChosen === 'Mozilla Public License 2.0') {
        licenseSelection = `[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    if (licenseChosen === 'Apache License 2.0') {
        licenseSelection = `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    if (licenseChosen === 'MIT License') {
        licenseSelection = `[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } ;
    if (licenseChosen === 'Boost Software License 1.0') {
        licenseSelection = `[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    };
    if (licenseChosen === 'The Unlicense') {
        licenseSelection = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    };
    if (licenseChosen === 'NONE') {
        licenseSelection = `![License: None Used]`
    };
    return licenseSelection
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}

  ## Table of Contents

  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#questions)

  ## Description

  ${data.project_description}

  ## Installation

  ${data.installation_instructions}

  ## Usage

  ${data.usage_instructions}

  ## Contributing

  ${data.contribution_guidelines}

  ## Test

  ${data.test_instructions}

  ## License

  ${renderLicenseBadge(data)}

  ## Questions

  -Github Username: ${data.github}
  -Email Address: ${data.email}`
}

module.exports = generateMarkdown;
