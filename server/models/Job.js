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
    position: { // 포지션
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    compensation: { // 보상금
      type: INTEGER,
      allowNull: false,
    },
    content: { // 채용내용
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    skill: { // 사용기술
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
