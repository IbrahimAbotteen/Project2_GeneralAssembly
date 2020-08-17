Employment Management....
This is a web app which is for managing employees and departments...
There is an employement manager who has the access to our database and can update our employees,departments...
For security issues,no one can access the system unless he has a user name and a password.Once he's logged in, he can modify and update the employee's information and the department's information...Also,he can add another manager who will have the same access to the database.

To access our database, follow these steps:

1-https://young-escarpment-81818.herokuapp.com/
2- username:"ga"
3- password"5432" 

Now you are logged in....

For more Information, see our wireframes folder...

Here are some of the routes which are used in our webApp:

"/" The start page which has the login form 
"/main" The main page which has the 4 main links for the app
"/emp" The list of the employees
"/emp/:id":information about a specific employee
"/emp/:id/edit":edit a specific employee
"/emp/add":adding new employee
"/dep" The list of the departments
"/dep/:id":information about a specific department
"/dep/:id/edit":edit a specific department
"/dep/add":adding new department
'/reg':adding a new user for the database

Here is how did I do my progress:
### Phases of Completion
#Phase 0
1- Making the database and the tables....
2- Auth testing to make sure that we can implement the idea of accessing the db...
3- Try to do the index using the MVC (just for testing purposes)
4- testing and deploying .....

Phase 1 
Employee Management page ... using the MVC and the routes...CRUD operations will be done here..... 

Phase 2 
Department management page 

phase 3
1-Make sure that login is working (accessing the db) 
2-Add new user (new manager of employment that can access the db)
