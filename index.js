// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: "What's your project title?",
        name: 'title',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "What is the description of your project?",
        name: 'descript',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "How do you install your project?",
        name: 'install',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "How do you go about using your project?",
        name: 'tutorial',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {   
        type: 'input',
        message: "Any credits to be made?",
        name: 'credit',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "Did you have any contributors?",
        name: 'contribute',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "What license do you use?",
        name: 'license',
        choices: ["MIT", 
        "GNU_AGPLv3", 
        "GNU_GPLv3", 
        "GNU_LGPLv3", 
        "Mozilla Public License 2.0",
        "Apache License 2.0", 
        "Boost Software License 1.0", 
        "OTHER", 
        "NONE"],
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "tests",
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'gitty',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
    {
        type: 'input',
        message: "And your email?",
        name: 'email',
        validate: (value)=>{if(value){return true} else{return 'Please put in a value continue.'}},
    },
]).then((answers) => {
    console.log(generateMarkdown(answers));
    const content = generateMarkdown({ ...answers });
    
    fs.writeFileSync("readme.md", generateMarkdown({ ...answers }, (err) =>
        err
            ? console.log(err)
            : console.log("Successfully created a read me file!")
    ));
});

