const fileGenerator = require('./fileGenerator');
const fs = require('fs');
const inquirer = require('inquirer');
// const { default: Choices } = require('inquirer/lib/objects/choices');

// ReadMe Questions

let questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function(answer) {
            if (answer.length <1) {
                return console.log('Please provide a title')
            } else {
                return true;}
            }
    },{
        type: 'input',
        message: 'Provide a short description explaining why, and how of your project.',
        name: 'description',
        validate: function(answer) {
            if (answer.length <50) {
                return console.log('Please provide a description longer than 50 characters')
            } else {
                return true;}
            }
    },{
        type: 'input',
        message: 'Describe this service or component at the feature level',
        name: 'feature'
    },{
        type: 'input',
        message: 'Provide associated user stories using the AS A... I WANT TO.... SO THAT I CAN... format',
        name: 'userStory'
    },{
        type: 'input',
        message: 'Provide exoected behavior using the standard GIVEN... WHEN.... THEN... format',
        name: 'acceptanceCriteria'
    },{
        type: 'input',
        message: 'Provide any installation steps required to get the dev environment running',
        name: 'installation'
    },{
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage'
    },{
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
        name: 'credits'
    },{
        type: 'list',
        message: 'Select the licenses used on your project.',
        name: 'license',
        choices : [
            'none', 
            'afl-3.0', 
            'apache-2.0', 
            'artistic-2.0', 
            'bsl-1.0', 
            'bsd-2-clause', 
            'bsd-3-clause', 
            'cc', 'wtfpl', 
            'gpl',
            'lgpl', 
            'isc', 
            'mit', 
            'postgresql', 
            'ncsa', 
            'unlicense', 
            'zlib']
    },{
        type: 'input',
        message: 'If you would like to allow contributors please provide guidelines, you can also use the [Contributor Covenant](https://www.contributor-covenant.org/)',
        name: 'contribute'
    },{
        type: 'input',
        message: 'If you have uploaded screenshots of the functioning application, please write the ReadMe paths using the standard format ![NAME OF IMAGE](./FILEPATH) 1 of 3',
        name: 'mockup1'
    },{
        type: 'input',
        message: 'If you have uploaded screenshots of the functioning application, please write the ReadMe paths using the standard format ![NAME OF IMAGE](./FILEPATH) 1 of 3',
        name: 'mockup2'
    },{
        type: 'input',
        message: 'If you have uploaded screenshots of the functioning application, please write the ReadMe paths using the standard format ![NAME OF IMAGE](./FILEPATH) 1 of 3',
        name: 'mockup3'
    },{
        type: 'input',
        message: 'If you have written tests please provide them here including examples on how to run them',
        name: 'tests'
    },{
        type: 'input',
        message: 'If you have a deployed application link please include it here',
        name: 'deployedLink'
    },{
        type: 'input',
        message: 'What is your GitHub user name so reviewers can contact you if they have questions (DO NOT include the @)?',
        name: 'username',
        validate: function(answer) {
            if (answer.length <1) {
                return console.log('Please provide a username')
            } else {
                return true;}
            }
    },{
        type: 'input',
        message: 'What is your email address so reviewers can contact you if they have questions?',
        name: 'email',
        validate: function(answer) {
            if (answer.length <1) {
                return console.log('Please provide a username')
            } else {
                return true;}
            }
    }
];


//Write to ReadMe.md file
inquirer.prompt(questions).then(function(response) {
    console.log(response);

    const content = fileGenerator(response);
    console.log(content);
    fs.writeFile('./README.md', content, function(err){
        if (err) throw err
        console.log('success');
    });

});