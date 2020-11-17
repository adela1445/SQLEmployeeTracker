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
        "View All Departments",
        "View All Roles",
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add New Employee",
        "Add New Role",
        "Add New Department",
        "Remove Employee",
        "Remove Department",
        "Remove Role",
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

        case "View All Departments":
          viewDept();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "View All Employees by Department":
          viewEmplDept();

        case "View All Employes by Manager":
          viewEmplMngr();
          break;

        case "Add New Employee":
          addEmpl();
          break;

        case "Add New Role":
          addRole();
          break;
        case "Add New Department":
          addDept();
          break;

        case "Remove Employee":
          removeEmpl();
          break;
        case "Remove Role":
          removeRole();
          break;
        case "Remove Department":
          removeDept();
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
  const query =
    "SELECT employee.id, employee.fname, employee.lname, employeeRole.title, department.deptName, employeeRole.salary FROM (( department INNER JOIN employeeRole ON department.id = employeeRole.deptid) INNER JOIN employee ON employee.roleId = employeeRole.id);";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewDept() {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewRoles() {
  const query = "SELECT * FROM employeeRole";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewEmplDept() {
  //will need inquirer
  const query = "";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewEmplMngr() {
  //will need inquirer
  const query = "";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function addEmpl() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the new employee?",
        name: "employeeFName",
      },
      {
        type: "input",
        message: "What's the last name of the new employee?",
        name: "employeeLName",
      },
      {
        type: "input",
        message: "What is the employee's role id #?",
        name: "roleID",
      },
      {
        type: "input",
        message:
          "Does the new employee have a manager? If so, what is their manager's id #?",
        name: "managerID",
      },
    ])
    .then((answer) => {
      var responses =[
        answer.employeeFName,
        answer.employeeLName,
        answer.roleID,
        answer.managerID,
      ]
      if (isNaN(parseInt(answer.managerID))){
        responses[3] = null;
      }
      const query =
        "INSERT INTO employee (fname, lname, roleId, managerId) VALUES (?, ?, ?, ?);";
      connection.query(
        query, responses,
        (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        }
      );
    });
}
console.log(hi)

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the title of the new role?",
        name: "newRoleTitle",
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "salary",
      },
      {
        type: "input",
        message: "What department does this new role belong to?",
        name: "deptID",
      },
    ])
    .then((answer) => {
      const query =
        "INSERT INTO employeeRole (title, salary, deptId) VALUES (?, ?, ?);";
      connection.query(
        query,
        [answer.newRoleTitle, answer.salary, answer.deptID],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        }
      );
    });
}

function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the new department name?",
        name: "deptName",
      },
    ])
    .then((answer) => {
      const query = "INSERT INTO department (deptName) VALUES (?);";
      connection.query(query, [answer.deptName], (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}

function removeEmpl() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the employee's ID #?",
        name: "employeeID",
      },
    ])
    .then((answer) => {
      const query = "DELETE FROM employee WHERE id = ?;";
      connection.query(query, [answer.employeeID], (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}
function removeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role do you wish to remove?",
        name: "removeRole",
      },
    ])
    .then((answer) => {
      const query = "DELETE FROM employeeRole WHERE id = ?;";
      connection.query(query, [answer.removeRole], (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}
function removeDept() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What department do you wish to remove",
        name: "removeDept",
      },
    ])
    .then((answer) => {
      const query = "DELETE FROM department WHERE id = ?;";
      connection.query(query, [answer.removeDept], (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}
function updateEmplRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "updateEmploy",
      },

      {
        type: "input",
        message: "What is their new role?",
        name: "newRole",
      },
    ])
    .then((answer) => {
      const query = "UPDATE employee SET roleId = ? WHERE fname = ?";
      connection.query(
        query,
        [answer.newRole, answer.updateEmploy],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        }
      );
    });
}

function updateEmplMngr() {
  connection.query("");
}
