const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Zimbabwe957&',
        database: 'company_db'
    }
);

function updateETable(role_id, id) {
    db.query(`UPDATE employee SET role_id=? WHERE id=?`, [role_id, id], (err, result) => {
        if (err) {
            console.log(err);
        }else {
            console.table(result);
        }
    });
}
function insertETable(string, integer, integer) {
    db.query(`INSERT INTO employees (title, salary, department_id) VALUES (?, ?, ?);`, [string, integer, integer], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table('Added new Employee!');
    });
}
function selectETable() {
    db.query(`SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name
    FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    LEFT JOIN departments ON roles.department_id = departments.id;`, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.table(result);
    });
}

function insertRTable(string, integer, integer) {
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`, [string, integer, integer], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.table('Added new role to the table.');
        }
    });
}
function selectRTable() {
    db.query(`SELECT roles.id, roles.title, roles.salary, departments.department_name
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id;`, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.table(result);
    }
    });
}

function insertDTable(string) {
    db.query(`INSERT INTO departments (department_name) VALUES (?);`, string, (err, result) => {
        if (err) {
            console.log(err);
        } else{

            console.table('Added new Dpt');
        }
    });
}
function selectDTable() {
    db.query(`SELECT * FROM company_db.departments;`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.table(result);
        }
        });
}

module.exports = {
    updateETable,
    insertDTable,
    insertETable,
    insertRTable,
    selectDTable,
    selectETable,
    selectRTable
}