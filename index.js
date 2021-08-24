const inquirer = require('inquirer');

const questionPrompts = {
    start: 'choose a table',
    departments: [
        'view departments',
        'create new department'
    ],
    roles: [
        'view roles',
    ],
    employees: [
        'view employees'
    ]
}

const listprompts = {
    start: [
        'all departments',
        'view all roles',
        'view all employees',
        'close out',
    ],
    departments: [
        'view deparments',
        'add a new department',
    ],
    roles: [
        'view roles',
        'add a new role'
    ],
    employees: [
        'view employees',
        'add a new employee',
        'update employee role information',
    ]
}

function startInq() {
    start();
}

function start() {
    inquirer.prompt([
        {
            type: 'list',
            message: questionPrompts.start,
            name:'choice',
            choices: listprompts.start
        }
    ])
}

startInq();