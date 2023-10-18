const { DataTypes, Sequelize, INTEGER } = require('sequelize');

// DB data 
const Apply = (sequelize) => {
  return sequelize.define('apply', {
    apply_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    done: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
      defaultValue: 0,
    },
  });
};

module.exports = Apply;
