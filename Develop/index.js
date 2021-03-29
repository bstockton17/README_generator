// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require ('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = ()=> {
    return inquirer.prompt([
          {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'Description',
            message: 'What is a brief description fo your project?',
          },
          {
            type: 'input',
            name: 'Installation',
            message: 'What are the installation instructions for your project?',
          },
          {
            type: 'input',
            name: 'Usage',
            message: 'And your usage information?',
          },
          {
            type: 'input',
            name: 'Contributing',
            message: 'Almost there, what are the contribution guidelines?',
          },
          {
            type: 'input',
            name: 'Tests',
            message: 'What are the test questions',
          },
          {
            type: 'checkbox',
            message: 'Which license would you like to use?',
            name: 'License',
            choices: ['none', 'GNU General Public License v3.0', 'Apache License 2.0', 'MIT License']
          },
          {
              type: 'input',
              name: 'Github',
              message: 'How about your Github username?',
          },
          {
              type: 'input',
              name: 'Email',
              message: 'And your email address?'
          },
        ]);
    };
    

        const generateREADME = (data) =>
        `#README.md THIS IS:  ${data.Title}
        DESCRIPTION:
         This project will ${data.Description}


        INSTALLATION:
         In order to install this application, you would like to ${data.Installation}


        USAGE:
         Ideally, you'd like to use this appplication as ${data.Usage}


         CONTRIBUTING GUIDELINES
         In order to contribute, you must ${data.Contributing}


         TESTS
         The test shall run as ${data.Tests}


         LICENSE
         The license used for this application is ${data.License}


         GITHUB PROFILE
         My github username is ${data.Github}

         
         EMAIL
         If you have any further questions, please contact me at ${data.Email}
        `;
      

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((data) => writeFileAsync('README.md', generateREADME(data)))
      .then(() => console.log('Successfully wrote to your README.md file'))
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();
