const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter the text for your logo./n Maximum: 3 letters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Enter a text color keyword or a hexadecimal number for the logo's test color`,
    },
    {
        type: 'input',
        name: 'logoColour',
        message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
      },
      {
        type: 'list',
        name: 'logoShape',
        message: `Select a logo shape`,
        choices: ['triangle', 'circle', 'square'],
      },
];


// change 16 for this app -- for SVG file
    function init() {
        inquirer.prompt(questions)
        .then((answers) => {
          console.log(answers);
          fs.writeFile('README.md', generateMarkdown(answers), (err) => {
            if (err) throw err;
            console.log('README generated!');
          });
        });
      }
      
      // Function call to initialize app
      init();