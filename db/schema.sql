-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- If the table already exists, remove it 
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);
