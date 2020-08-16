CREATE TABLE IF NOT EXISTS departments (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  phone_number INTEGER NULL,
  email VARCHAR NOT NULL
);

 


