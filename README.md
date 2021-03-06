### Overview

In this assignment, we're going to Sequelize the `Burger` app we made last week.

This is a full-stack web application that allows users to create and "eat" new varieties of burgers. Data is persisted in a MySQL database, allowing users to interact with one another's submissions. This application is an iteration upon a previous version that adds Sequelize ORM and customer associations. 

## Getting Started

### Prerequisites
- MySQL
- Node.js

### Installing
To run the application locally, please ensure that you have the prerequisites installed, then take the following steps:
- Clone this repository to your local machine with `git clone <repo-url>`.
- Install NPM dependencies by running `npm install` in the project directory.
- If you use a MySQL username other than `root` or have a MySQL password, open `config/config.json` and update these values 
- Log into MySQL CLI with `mysql -u root` (substitute your username and add `-p <your password>` if needed).
- Run `CREATE DATABASE burgers_db;`
- Exit MySQL with `exit`.
- Ensure that you are in the root project directory, then run `npm start`.
- The application will be running at `localhost:3000/`

## Built with
- Bootstrap (Front-end framework)
- DataGrip (Database GUI)
- Express.js (Server framework)
- Handlebars (Templating engine)
- Heroku (Cloud platform)
- JawsDB (Heroku database add-on)
- MySQL (RDBMS)
- Node.js (Javascript environment)
- Sequelize (ORM)
- WebStorm (Javascript GUI)
