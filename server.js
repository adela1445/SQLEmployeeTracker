//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
// const cTable = require("console.table");

// Connecting to my sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bootcamp99",
  database: "CMS_DB",
});
// Making sure my connection with server & database works
connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

// Starts the actions based on what the user selects.
function start() {
  // const table = cTable.getTable([
  //   // {
  //   //   name: 'foo',
  //   //   age: 10
  //   // }, {
  //   //   name: 'bar',
  //   //   age: 20
  //   // }
  // ]);

  // console.log(table);
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employess by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View All Employees":
          viewEmpl();
          break;

        case "View All Employees by Department":
          viewEmplDept();
          break;

        case "View All Employess by Manager":
          viewEmplMngr();
          break;

        case "Add Employee":
          addEmpl();
          break;

        case "Remove Employee":
          removeEmpl();
          break;
        case "Update Employee Role":
          updateEmplRole();
          break;
        case "Update Employee Manager":
          updateEmplMngr();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function viewEmpl() {
  connection.query("");
}

function viewEmplDept() {
  connection.query("");
}

function viewEmplMngr() {
  connection.query("");
}

function addEmpl() {
  connection.query("");
}

function removeEmpl() {
  connection.query("");
}

function updateEmplRole() {
  connection.query("");
}

function updateEmplMngr() {
  connection.query("");
}
