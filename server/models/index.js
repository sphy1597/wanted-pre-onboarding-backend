'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Job = require('./Job')(sequelize);
db.User = require('./User')(sequelize);
db.Company = require('./Company')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
