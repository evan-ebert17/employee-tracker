const inquirer = require('inquirer');
const queries = require('./db/db.js');

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
    ]).then((value) => {
        switch(value.choice){
            case listprompts.start[0]:
                departments();
                break;
            case listprompts.start[1]:
                roles();
                break;
            case listprompts.start[2]:
                employees();
                break;
            case listprompts.start[2]:
                process.abort();
        }
    })
}

function departments() {
    inquirer.prompt([
        {
            type: 'list',
            message: questionPrompts.departments[0],
            name: 'choice',
            choices: listprompts.departments
        }
    ]).then((value) => {
        switch(value.choice){
            case listprompts.departments[0]:
                queries.selectDTable();
                start();
                break;
            case listprompts.departments[1]:
                addDept();
                break;
        }
    })
}

function addDept() {
    inquirer.prompt({
        type: 'input',
        message: questionPrompts.departments[1],
        name: 'choice',
    }).then((value) => {
        queries.insertDTable(value.choice);
        start();
    })
}

function roles() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'choose from these available role options',
        name: 'choice',
        choices: listprompts.roles
    }
    ]).then((value) => {
        switch(value.choice){
            case listprompts.roles[0]:
                queries.selectRTable();
                start();
                break;
            case listprompts.roles[1]:
                addRole();
                break;
            case listprompts.roles[2]:
                updateRole();
                break;
        }
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new role name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter new role salary',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter new role dpt id',
            name: 'dpt_id',
        },
    ]).then((value) => {
        queries.insertRTable(value.title, value.salary, value.department_id);
        start();
    })
}

function employees() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'choose from the list what to do with the employees',
        name: 'choice',
        choices: listprompts.employees
    }
    ]).then((value) => {
        switch(value.choice){
            case listprompts.employees[0]:
                queries.selectETable();
                start();
                break;
            case listprompts.employees[1]:
                addEmployee();
                break;
            case listprompts.employees[1]:
                updateEmployee();
                break;
        }
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new employee title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter new employee salary',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter new employee dpt id',
            name: 'department_id',
        },
        {
            type: 'input',
            message: 'Enter new manager id',
            name: 'manager_id',
        },
    ]).then((value) => {
        queries.insertETable(value.title, value.salary, value.department_id, value.manager_id);
        start();
    })
}

function updateEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employee ID to update',
            name: 'employee_id',
        },
        {
            type: 'input',
            message: 'Enter the new role',
            name: 'role',
        },
    ]).then((value) => {
        queries.updateETable(value.employee_id, value.role);
        start();
    })
}

startInq();