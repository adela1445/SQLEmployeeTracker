-- Create the database CMS_DB and specified it for use.
CREATE DATABASE CMS_DB;
USE CMS_DB;

-- Create the table department.
CREATE TABLE  department(
  id INT AUTO_INCREMENT PRIMARY KEY,
  deptName varchar(30) NOT NULL
);

-- Create the table employeeRole.
CREATE TABLE  employeeRole(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title varchar(30) NOT NULL, -- role title
  salary DECIMAL NOT NULL, -- role salary
  deptId INT NOT NULL,
  
);

-- Create the table employee.
CREATE TABLE  employee(
  id INT AUTO_INCREMENT,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  roleId INT NOT NULL,
  managerId INT NULL,
  PRIMARY KEY(id),
  
);


-- Queries
