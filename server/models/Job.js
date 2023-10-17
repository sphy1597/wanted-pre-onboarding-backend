const { DataTypes, Sequelize, INTEGER } = require('sequelize');

// DB data 
const Job = (sequelize) => {
  return sequelize.define('job', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    nation: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    region: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    position: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    compensation: {
      type: INTEGER,
      allowNull: false,
    },
    skill: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    
    done: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 0,
    },
  });
};

module.exports = Job;
