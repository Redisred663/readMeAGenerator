// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { default: ListPrompt } = require("inquirer/lib/prompts/list");

license = "";
function renderLicense(license) {
	switch (license) {
		case "GNU AGPLv3":
		  return (license =
			"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)%22)");
		case "GNU GPLv3":
		  return (license =
			"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)%22)");
	
		case "GNU LGPLv3":
		  return (license =
			"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)%22)");
	
		case "Mozilla Public License 2.0":
		  return (license =
			"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)%22)");
	
		case "Apache License 2.0":
		  return (license =
			"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)%22)");
	
		case "MIT License":
		  return (license =
			"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)%22)");
	
		case "Boost Software License 1.0":
		  return (license =
			"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)%22)");
	
		case "The Unlicense":
		  return (license =
			"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)%22)");
		case "Other":
		  return (license =
			"[![License: TYPE LICENSE NAME HERE](PROVIDE BADGE IMAGE SRC LINK HERE)](PROVIDE BADGE LINK HERE)");
	  }
};


// function to generate markdown for README
function generateMarkdown(answers) {
    return `
# ${answers.title}
https://github.com/${answers.gitty}
## Description
${answers.descript}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
In order to install and run the application you follow these directions: ${answers.install}
## Usage
And in order to use application itself you simply: ${answers.tutorial} 
### License
The following license which was used:
[![License](https://img.shields.io/badge/License-${answers.license}-blue)](https://opensource.org/licenses/${license})
## Contributing
${answers.contribute}
## Tests
For the testing process, please use: ${answers.tests}
## Questions
If you have any questions about the application, please contact me at ${answers.gitty}, or to get a more direct contact. please email me at, ${answers.email}.
`;
}


module.exports = generateMarkdown;
