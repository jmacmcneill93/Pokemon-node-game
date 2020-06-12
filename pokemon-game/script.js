var inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your trainer name?',
        name: 'trainerName'

    },
    {
        type: 'password',
        message: 'password: ',
        name: 'trainerPassword'
    },
    {
        type: 'list',
        message: 'Choose your first Pokemon:',
        choices: ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu'],
        name: 'trainerChoice'
    },
    {
        type: 'confirm',
        message: 'Are you sure?',
        default: true,
        name: 'trainerConfirm'
    }
])
.then(answers => {
    if (answers.trainerConfirm == true) {
       console.log(`Hello ${answers.trainerName}, your &{answers.trainerChoice} is ready for battle`);
    }else {
        console.log(`That's okay ${answers.trainerName} come back when you're more sure.`);

    }
})
.catch(error => {
    console.log(error.isTtyError);
});