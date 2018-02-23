// requiring the sequelize package
var Sequelize = require('sequelize');

// adding in the environment variable option for JAWSDB for dev & prod
var env;
if (process.env.JAWSDB_URL)
    env = "production";
else {
    env = 'development';
}

// Defining our config for the sql server based
var config = require('./config')[env];

// Settig up our connection variable (sequelize) 
var sequelize;
if (config.use_env_variable) {
	// jawsDB production option
	sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	// local mysqlDB development option
	sequelize = new Sequelize(config.database, config.username, config.password, {
		host: config.host,
		dialect: config.dialect
	});
}

// Exporting the connection to the model
module.exports = sequelize;