INSERT INTO employees
(name,age,title)
VALUES
('John Tayco',30,'SW Engineer');

INSERT INTO employees
(name,age,title)
VALUES
('Charls Junior',32,'Accountant');

INSERT INTO employees
(name,age,title)
VALUES
('Dude Blude',28,'Sales Manager');

INSERT INTO employees
(name,age,title)
VALUES
('Zack Jack',35,'Financial manager');

INSERT INTO employees
(name,age,title)
VALUES
('Moe Choe',30,'Full Stack Engineer');

INSERT INTO employees
(name,age,title)
VALUES
('Clarc Alex',40,'Financial Manager');

INSERT INTO employees
(name,age,title)
VALUES
('Nancy Lesslie',24,'Sales Manager');

INSERT INTO employees
(name,age,title)
VALUES
('Bob Crone',35,'Computer Engineer');


INSERT INTO users 
(username,email,password_digest)
VALUES
('in4manager','hemaucla@gmail.com',"$2a$10$448F6TLBBLLIOjbD212/.O0TdCj48eJ1Vpf.0G94Pg8cB8Hglrk5O")
ON CONFLICT DO NOTHING;