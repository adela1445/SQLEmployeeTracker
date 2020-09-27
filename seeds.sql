INSERT INTO department (id, deptName) VALUES (1, "Sales"), (2,"Engineering"),(3, "Finance"),(4,"Legal");


INSERT INTO employee (id, fname, lname, role_id, manager_id) VALUES (1, "Sarah", "Jones", 4, 3), (2,"John","Smith", 1),(3, "Maxamilium", "Goofy", 6, 5),(4,"Donald", "Duck", 3), (5, "Zack", "Fair", 7), (6, "Cloud", "Strife", 8, 7), (7, "Edward", "Elric", 3);


INSERT INTO employeeRole (id, title, salary, department_id) VALUES (1, "Sales Lead", 100000, 1), (2,"Salesperson", 80000, 1),(3, "Lead Engineer", 150000, 2),(4,"Software Engineer", 120000, 2), (5, "Account Manager", 200000, 3), (6, "Accountant", 125000, 3), (7, "Legal Team Lead", 250000, 4), (8, "Lawyer", 190000, 4); 
