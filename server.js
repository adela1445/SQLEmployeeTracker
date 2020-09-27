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
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Find songs by artist":
          // artistSearch();
          break;

        case "Find all artists who appear more than once":
          // multiSearch();
          break;

        case "Find data within a specific range":
          // rangeSearch();
          break;

        case "Search for a specific song":
          // songSearch();
          break;

        case "Find artists with a top song and top album in the same year":
          // songAndAlbumSearch();
          break;
      }
    });
}
